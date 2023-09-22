import CoreVideo
import CoreMedia
import Foundation

@objc(ProcessRawVideoSampleBufferDelegate)
public protocol ProcessRawVideoSampleBufferDelegate: AnyObject {
    func cameraView(_ cameraView: NSCameraView, willProcessRawVideoSampleBuffer sampleBuffer: CMSampleBuffer, onQueue queue: DispatchQueue)
    func cameraView(_ cameraView: NSCameraView, renderToCustomContextWithImageBuffer imageBuffer: CVPixelBuffer, onQueue queue: DispatchQueue)
}