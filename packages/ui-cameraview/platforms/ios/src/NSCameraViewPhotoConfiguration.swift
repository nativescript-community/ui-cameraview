
import Foundation
import NextLevel

@objcMembers
@objc(NSCameraViewPhotoConfiguration)
public class NSCameraViewPhotoConfiguration: NSObject {
    var configuration: NextLevelPhotoConfiguration
  required init(configuration: NextLevelPhotoConfiguration) {
    self.configuration = configuration
    super.init()
  }
}
