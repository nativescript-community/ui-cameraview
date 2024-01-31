import UIKit
import Foundation
import AVFoundation

@objc(NSCameraViewDelegate)
public protocol NSCameraViewDelegate: AnyObject {
    func sessionDidStart(_ cameraView: NSCameraView)
    func sessionDidStop(_ cameraView: NSCameraView)
}
