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

long long DocumentDetector::pointSideLine(Point &lineP1, Point &lineP2, Point &point) {
    long x1 = lineP1.x;
    long y1 = lineP1.y;
    long x2 = lineP2.x;
    long y2 = lineP2.y;
    long x = point.x;
    long y = point.y;
    return (x - x1)*(y2 - y1) - (y - y1)*(x2 - x1);
}
vector<cv::Point> DocumentDetector::sortPointClockwise(vector<cv::Point> points) {
    if (points.size() != 4) {
        return points;
    }

    Point unFoundPoint;
    vector<Point> result = {unFoundPoint, unFoundPoint, unFoundPoint, unFoundPoint};

    long minDistance = -1;
    for(Point &point : points) {
        long distance = point.x * point.x + point.y * point.y;
        if(minDistance == -1 || distance < minDistance) {
            result[0] = point;
            minDistance = distance;
        }
    }
    if (result[0] != unFoundPoint) {
        Point &leftTop = result[0];
        points.erase(std::remove(points.begin(), points.end(), leftTop));
        if ((pointSideLine(leftTop, points[0], points[1]) * pointSideLine(leftTop, points[0], points[2])) < 0) {
            result[2] = points[0];
        } else if ((pointSideLine(leftTop, points[1], points[0]) * pointSideLine(leftTop, points[1], points[2])) < 0) {
            result[2] = points[1];
        } else if ((pointSideLine(leftTop, points[2], points[0]) * pointSideLine(leftTop, points[2], points[1])) < 0) {
            result[2] = points[2];
        }
    }
    if (result[0] != unFoundPoint && result[2] != unFoundPoint) {
        Point &leftTop = result[0];
        Point &rightBottom = result[2];
        points.erase(std::remove(points.begin(), points.end(), rightBottom));
        if (pointSideLine(leftTop, rightBottom, points[0]) > 0) {
            result[1] = points[0];
            result[3] = points[1];
        } else {
            result[1] = points[1];
            result[3] = points[0];
        }
    }

    if (result[0] != unFoundPoint && result[1] != unFoundPoint && result[2] != unFoundPoint && result[3] != unFoundPoint) {
        return result;
    }

    return points;
}
vector<vector<cv::Point>> DocumentDetector::scanPoint(Mat &edged) {
    double width;
    double height;
    Mat image = resizeImage();
    cvtColor(image, image, COLOR_BGR2GRAY);
  // convert photo to LUV colorspace to avoid glares caused by lights
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
//      cvtColor(image, image, COLOR_BGR2Luv);
    Size size = image.size();
    width = size.width;
    height = size.height;
    cv::Mat blurred;

    cv::GaussianBlur(image, image, cv::Size(9,9), 0);
    // dilate helps to remove potential holes between edge segments
    Mat kernel = cv::getStructuringElement(MORPH_RECT,cv::Size(9,9));
    cv::morphologyEx(image, image, MORPH_CLOSE, kernel);
    cv::Canny(image, image, 0, 84);
//    cv::Mat threshOutput = cv::Mat(blurred.size(), CV_8U);
    std::vector<PointAndArea> squares;
    std::vector<PointAndArea> foundSquares;
    std::vector<int> indices;
//    for (int c = 2; c >= 0; c--) {
//        Mat lBlurred[] = {blurred};
//        Mat lOutput[] = {threshOutput};
//        int ch[] = {c, 0};
//        cv::mixChannels(lBlurred, 1, lOutput, 1, ch, 1);

        int thresholdLevel = 3;

        int t = 60;
  int l =2;
//        for (int l = thresholdLevel-1 ; l >= 0; l--) {
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
//            cv::threshold(blurred, edged, (200 - 175 / (l + 2.0)), 256.0,
//                          cv::THRESH_BINARY);
            findSquares(image, width, height, foundSquares);
            // Call findThreshSquares here with appropriate parameters
//            }

//            if (foundSquares.size() > 0) {
                // stop as soon as find some
//                break;
//            }
//        }
//    }

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
            result.push_back(sortPointClockwise(points));
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
