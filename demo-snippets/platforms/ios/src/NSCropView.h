#import <UIKit/UIKit.h>
//#import <opencv2/opencv.hpp>

@interface NSCropView : UIView
@property (strong, nonatomic, retain) NSArray*  quads;
@property (strong, nonatomic, retain) UIImage*  image;
@property (nonatomic, assign) CGSize  imageSize;
@end

