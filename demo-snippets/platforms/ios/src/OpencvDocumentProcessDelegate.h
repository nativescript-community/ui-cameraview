#import <Foundation/Foundation.h>
#import <CoreMedia/CoreMedia.h>
#import <CoreVideo/CoreVideo.h>
#import "demosvelte-Swift.h"
#import "NSCropView.h"

@interface OpencvDocumentProcessDelegate : NSObject <ProcessRawVideoSampleBufferDelegate>
@property (strong, nonatomic) NSCropView *cropView;

- (instancetype)initWithCropView:(NSCropView*) view;
@end
