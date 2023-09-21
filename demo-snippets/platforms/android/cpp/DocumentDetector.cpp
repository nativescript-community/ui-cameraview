#include "./include/DocumentDetector.h"

using namespace detector;
using namespace cv;
using namespace std;

typedef std::pair<std::vector<cv::Point>, double> PointAndArea;
bool sortByArea(PointAndArea contour1, PointAndArea contour2)
{
    return (contour1.second > contour2.second);
}

DocumentDetector::DocumentDetector(cv::Mat &bitmap, int resizeThreshold, int imageRotation) {
    image = bitmap;
    DocumentDetector::resizeThreshold = resizeThreshold;
    DocumentDetector::imageRotation = imageRotation;
}

DocumentDetector::DocumentDetector(int resizeThreshold, int imageRotation) {
    DocumentDetector::resizeThreshold = resizeThreshold;
    DocumentDetector::imageRotation = imageRotation;
}

DocumentDetector::~DocumentDetector() {
}


double angle(cv::Point pt1, cv::Point pt2, cv::Point pt0) {
    double dx1 = pt1.x - pt0.x;
    double dy1 = pt1.y - pt0.y;
    double dx2 = pt2.x - pt0.x;
    double dy2 = pt2.y - pt0.y;
    return (dx1 * dx2 + dy1 * dy2) /
           sqrt((dx1 * dx1 + dy1 * dy1) * (dx2 * dx2 + dy2 * dy2) + 1e-10);
}

void DocumentDetector::findSquares(cv::Mat srcGray, double scaledWidth, double scaledHeight,
                                   std::vector<std::pair<std::vector<cv::Point>, double>> &squares) {
    // Contours search
    std::vector<std::vector<cv::Point>> contours;
    vector<Vec4i> hierarchy;
    cv::findContours(srcGray, contours, hierarchy, cv::RETR_TREE, cv::CHAIN_APPROX_SIMPLE);

    std::vector<Point> approx;
    for (size_t i = 0; i < contours.size(); i++) {
        std::vector<Point> contour = contours[i];

        // Detection of geometric shapes
        double epsilon = cv::arcLength(contour, true) * contoursApproxEpsilonFactor;
        cv::approxPolyDP(contour, approx, epsilon, true);

        // Detection of quadrilaterals among geometric shapes
        if (approx.size() >= 4 && cv::isContourConvex(approx)) {
            const double area = std::abs(contourArea(approx));
            if (area > scaledWidth / areaScaleMinFactor * (scaledHeight / areaScaleMinFactor)) {
                double maxCosine = 0.0;
                for (int j = 2; j < 5; j++) {
                    double cosine = std::abs(angle(approx[j % 4], approx[j - 2], approx[j - 1]));
                    maxCosine = std::max(maxCosine, cosine);
                }
                // Selection of quadrilaterals with large enough angles
                if (maxCosine < 0.5) {
                    squares.push_back(std::pair<std::vector<cv::Point>, double>(approx, area));
                }
            }
        }
    }
}

vector<vector<cv::Point>> DocumentDetector::scanPoint() {
    Mat edged;
    vector<vector<cv::Point>> result = scanPoint(edged);
    edged.release();
    return result;
}
vector<vector<cv::Point>> DocumentDetector::scanPoint(Mat &edged) {
    double width;
    double height;
    Mat image = resizeImage();
    // convert photo to LUV colorspace to avoid glares caused by lights
    cvtColor(image, image, COLOR_BGR2Luv);
    if (imageRotation != 0) {
        switch (imageRotation) {
            case 90:
                rotate(image, image, ROTATE_90_CLOCKWISE);
                break;
            case 180:
                rotate(image, image, ROTATE_180);
                break;
            default:
                rotate(image, image, ROTATE_90_COUNTERCLOCKWISE);
                break;

        }
    }
    Size size = image.size();
    width = size.width;
    height = size.height;
    cv::Mat blurred;

    cv::medianBlur(image, blurred, 9);
    cv::Mat threshOutput = cv::Mat(blurred.size(), CV_8U);
    std::vector<PointAndArea> squares;
    std::vector<PointAndArea> foundSquares;
    std::vector<int> indices;
    for (int c = 2; c >= 0; c--) {
        Mat lBlurred[] = {blurred};
        Mat lOutput[] = {threshOutput};
        int ch[] = {c, 0};
        cv::mixChannels(lBlurred, 1, lOutput, 1, ch, 1);

        int thresholdLevel = 3;

        int t = 60;
        for (int l = thresholdLevel-1 ; l >= 0; l--) {
//        for (int l = 0; l < thresholdLevel; l++) {
//            if (l == 0) {
            //    t = 60;
            //    while (t >= 10) {
                //    cv::Canny(threshOutput, edged, t, t * 2);
                //    cv::dilate(edged, edged, cv::Mat(), cv::Point(-1, -1), 2);
                //    findSquares(
                //            edged,
                //            width,
                //            height,
                //            foundSquares);
                //    if (foundSquares.size() > 0) {
                //        break;
                //    }
                   // Call findCannySquares here with appropriate parameters
                //    t -= 10;
            //    }
//            } else {
            cv::threshold(threshOutput, edged, (200 - 175 / (l + 2.0)), 256.0,
                          cv::THRESH_BINARY);
            findSquares(edged, width, height, foundSquares);
            // Call findThreshSquares here with appropriate parameters
//            }

            if (foundSquares.size() > 0) {
                // stop as soon as find some
                break;
            }
        }
    }

    int marge = static_cast<int>(width * 0.01);
    std::vector<PointAndArea> squaresProba;
    bool probable;

    for (size_t i = 0; i < foundSquares.size(); i++) {
        probable = true;
        std::vector<cv::Point> pointsProba = foundSquares[i].first;
        for (const cv::Point &p: pointsProba) {
            if (p.x < marge || p.x >= width - marge || p.y < marge || p.y >= height - marge) {
                probable = false;
                break;
            }
        }
        if (probable) {
            squaresProba.push_back(foundSquares[i]);
        }
    }

    int largestContourIndex = 0;

    if (!squaresProba.empty()) {
        double largestArea = -1.0;
        for (size_t i = 0; i < squaresProba.size(); i++) {
            double a = squaresProba[i].second;
            if (a > largestArea && a < width * height) {
                largestArea = a;
                largestContourIndex = static_cast<int>(i);
            }
        }
        squares.push_back(squaresProba[largestContourIndex]);
    }

    for (size_t id = 0; id < squaresProba.size(); id++) {
        if (static_cast<int>(id) != largestContourIndex) {
            squares.push_back(squaresProba[id]);
        }
    }
    blurred.release();
    image.release();
    if (squares.size() > 0) {
        sort(squares.begin(), squares.end(), sortByArea);
        std::vector< std::vector<Point>> result;
        for (int i = 0; i < squares.size(); i++) {
            std::vector<Point> points = squares[i].first;
            for (int j = 0; j < points.size(); j++) {
                points[j] *= resizeScale;
            }
            result.push_back(points);
        }
        return result;

    }
    return vector<vector<Point>>();
}

Mat DocumentDetector::resizeImage() {
    int width = image.cols;
    int height = image.rows;
    int minSize = min(width, height);
    if (minSize > resizeThreshold) {
        resizeScale = 1.0f * minSize / resizeThreshold;
        width = static_cast<int>(width / resizeScale);
        height = static_cast<int>(height / resizeScale);
        Size size(width, height);
        Mat resizedBitmap(size, CV_8UC3);
        resize(image, resizedBitmap, size);
        return resizedBitmap;
    }
    // we clone to ensure we can clean things correctly
    return image.clone();
}
