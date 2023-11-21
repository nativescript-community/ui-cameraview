import Foundation
import AVFoundation

@objc(NSCameraViewPhotoDelegate)
public protocol NSCameraViewPhotoDelegate: AnyObject {
    func cameraView(_ cameraView: NSCameraView, didCapturePhotoWithConfiguration photoConfiguration: NSCameraViewPhotoConfiguration)
    func cameraView(_ cameraView: NSCameraView, didFinishProcessingPhoto photo: AVCapturePhoto, photoDict: [String : Any]?, photoConfiguration: NSCameraViewPhotoConfiguration)
}
