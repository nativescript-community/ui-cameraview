import UIKit
import Foundation
import AVFoundation

@objc(NSCameraViewPhotoDelegate)
public protocol NSCameraViewPhotoDelegate: AnyObject {
    func cameraView(_ cameraView: NSCameraView, didCapturePhotoWithConfiguration photoConfiguration: NSCameraViewPhotoConfiguration)
    func cameraView(_ cameraView: NSCameraView, didFinishProcessingPhoto photo: UIImage, photoDict: [String : Any]?, photoConfiguration: NSCameraViewPhotoConfiguration)
}
