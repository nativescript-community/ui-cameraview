import Foundation

@objc(NSCameraViewVideoDelegate)
public protocol NSCameraViewVideoDelegate: AnyObject {
    func cameraView(_ cameraView: NSCameraView, didCompletePhotoCaptureFromVideoFrame photoDict: [String : Any]?)
}