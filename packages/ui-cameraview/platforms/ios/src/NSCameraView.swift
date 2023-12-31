import UIKit
import CoreVideo
import CoreMedia
import Foundation
import NextLevel
import AVFoundation

struct RuntimeError: LocalizedError {
  let description: String
  
  init(_ description: String) {
    self.description = description
  }
  
  var errorDescription: String? {
    description
  }
}

@objcMembers
@objc(NSCameraView)
public class NSCameraView: UIView, NextLevelVideoDelegate, NextLevelPhotoDelegate, NextLevelDelegate {
  
  public weak var processingDelegate: ProcessRawVideoSampleBufferDelegate?
  public weak var videoDelegate: NSCameraViewVideoDelegate?
  public weak var photoDelegate: NSCameraViewPhotoDelegate?
  var nextLevel: NextLevel?
  var captureModeCompletionHandler: (()->Void)?
  override init(frame: CGRect) {
    super.init(frame: frame )
    commonInit()
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
    commonInit()
  }
  deinit {
    self.processingDelegate = nil
    self.videoDelegate = nil
    self.photoDelegate = nil
  }
  
  public override var frame: CGRect {
    get {
      return super.frame
    }
    set {
      super.frame = newValue
      self.nextLevel?.previewLayer.frame = self.bounds
    }
  }


  public var videoGravity: String {
    get {
      return (self.nextLevel?.previewLayer.videoGravity ?? AVLayerVideoGravity.resizeAspectFill).rawValue
    }
    set {
      self.nextLevel?.previewLayer.videoGravity = AVLayerVideoGravity(rawValue: newValue)
    }
  }
  
  public var flashMode: Int {
    get {
      return (self.nextLevel?.flashMode ?? NextLevelFlashMode.off).rawValue
    }
    set {
      self.nextLevel?.flashMode = NextLevelFlashMode(rawValue: newValue)!
    }
  }
  public var torchMode: Int {
    get {
      return (self.nextLevel?.torchMode ?? NextLevelTorchMode.off).rawValue
    }
    set {
      self.nextLevel?.torchMode = NextLevelTorchMode(rawValue: newValue)!
    }
  }
  public var focusMode: Int {
    get {
      return (self.nextLevel?.focusMode ?? NextLevelFocusMode.autoFocus).rawValue
    }
    set {
      self.nextLevel?.focusMode = NextLevelFocusMode(rawValue: newValue)!
    }
  }
  
  func commonInit() {
    self.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    self.backgroundColor = UIColor.black
    
    self.nextLevel = NextLevel()
    if let nextLevel = self.nextLevel {
      // Configure NextLevel by modifying the configuration ivars
      self.layer.addSublayer(nextLevel.previewLayer)
      nextLevel.previewLayer.frame = self.bounds
      //    nextLevel.delegate = self
      //     nextLevel.deviceDelegate = self
      // nextLevel.flashDelegate = self
      nextLevel.delegate = self
      nextLevel.videoDelegate = self
      nextLevel.photoDelegate = self
      // nextLevel.metadataObjectsDelegate = self
      
      nextLevel.automaticallyUpdatesDeviceOrientation = true
      
      // photo configuration
      nextLevel.photoConfiguration.preset = AVCaptureSession.Preset.photo
      let supportsHEVC = AVAssetExportSession.allExportPresets().contains(AVAssetExportPresetHEVCHighestQuality)
      nextLevel.photoConfiguration.codec = supportsHEVC ? .hevc : .jpeg
      
      // video configuration
      nextLevel.videoConfiguration.preset = AVCaptureSession.Preset.hd1280x720
      nextLevel.videoConfiguration.bitRate = 5500000
      nextLevel.videoConfiguration.maxKeyFrameInterval = 30
      nextLevel.videoConfiguration.profileLevel = AVVideoProfileLevelH264HighAutoLevel
      
      // audio configuration
      // for now disable audio
      nextLevel.captureMode = NextLevelCaptureMode.photo
      //    nextLevel.audioConfiguration.bitRate = 96000
      //    nextLevel.disableAudioInputDevice()
      // metadata objects configuration
      // nextLevel.metadataObjectTypes = [AVMetadataObject.ObjectType.face, AVMetadataObject.ObjectType.qr]
    }
  }
  
  public func startPreview() throws {
    do {
      if (self.nextLevel?.session == nil) {
        try self.nextLevel?.start()
      }
    } catch {
      let nextLevelError = error as! NextLevelError
      // re throw the error with the description so that N can correctly show the error message
      throw RuntimeError(nextLevelError.description)
    }
    
  }
  
  public func stopPreview() {
    self.nextLevel?.stop()
  }
  public func toggleCamera() {
    self.nextLevel?.flipCaptureDevicePosition()
  }
  public func focusAtAdjustedPointOfInterest(_ adjustedPoint: CGPoint){
    self.nextLevel?.focusAtAdjustedPointOfInterest(adjustedPoint: adjustedPoint)
  }

  public var canCapturePhoto: Bool {
    get {
      return self.nextLevel?.canCapturePhoto ?? false
    }
  }
  public var canCaptureVideo: Bool {
    get {
      return self.nextLevel?.canCaptureVideo ?? false
    }
  }
  public func capturePhoto() {
    if let nextLevel = self.nextLevel , self.canCapturePhoto {
      if ( nextLevel.captureMode == NextLevelCaptureMode.photo) {
        nextLevel.capturePhoto()
      } else {
        captureModeCompletionHandler = {
          nextLevel.capturePhoto()
        }
        nextLevel.captureMode = NextLevelCaptureMode.photo
      }
    }
  }
  public func capturePhotoFromVideo() {
    if let nextLevel = self.nextLevel  ,  self.canCaptureVideo {
        if ( nextLevel.captureMode == NextLevelCaptureMode.videoWithoutAudio || nextLevel.captureMode == NextLevelCaptureMode.video) {
        nextLevel.capturePhotoFromVideo()
      } else {
        captureModeCompletionHandler = {
          nextLevel.capturePhotoFromVideo()
        }
        nextLevel.captureMode = NextLevelCaptureMode.videoWithoutAudio
      }
    }
  }
  
  // MARK: NextLevelDelegate

  public func nextLevel(_ nextLevel: NextLevel, didUpdateVideoConfiguration videoConfiguration: NextLevelVideoConfiguration) {
    
  }
  
  public func nextLevel(_ nextLevel: NextLevel, didUpdateAudioConfiguration audioConfiguration: NextLevelAudioConfiguration) {
    
  }
  
  public func nextLevelSessionWillStart(_ nextLevel: NextLevel) {
    
  }
  
  public func nextLevelSessionDidStart(_ nextLevel: NextLevel) {
    
  }
  
  public func nextLevelSessionDidStop(_ nextLevel: NextLevel) {
    
  }
  
  public func nextLevelSessionWasInterrupted(_ nextLevel: NextLevel) {
    
  }
  
  public func nextLevelSessionInterruptionEnded(_ nextLevel: NextLevel) {
    
  }
  
  public func nextLevelCaptureModeWillChange(_ nextLevel: NextLevel) {
    
  }
  
  
  
  public func nextLevelCaptureModeDidChange(_ nextLevel: NextLevel) {
      captureModeCompletionHandler?()
  }
  
  // MARK: NextLevelPhotoDelegate

  public func nextLevel(_ nextLevel: NextLevel, willProcessRawVideoSampleBuffer sampleBuffer: CMSampleBuffer, onQueue queue: DispatchQueue) {
    self.processingDelegate?.cameraView(self, willProcessRawVideoSampleBuffer: sampleBuffer, onQueue: queue)
  }
  
  public func nextLevel(_ nextLevel: NextLevel, renderToCustomContextWithImageBuffer imageBuffer: CVPixelBuffer, onQueue queue: DispatchQueue) {
    self.processingDelegate?.cameraView(self, renderToCustomContextWithImageBuffer: imageBuffer, onQueue: queue)
  }
  
  public func nextLevel(_ nextLevel: NextLevel, didUpdateVideoZoomFactor videoZoomFactor: Float) {
    
  }
  
  public func nextLevel(_ nextLevel: NextLevel, willProcessFrame frame: AnyObject, timestamp: TimeInterval, onQueue queue: DispatchQueue) {
    
  }
  
  public func nextLevel(_ nextLevel: NextLevel, didSetupVideoInSession session: NextLevelSession) {
    
  }
  
  public func nextLevel(_ nextLevel: NextLevel, didSetupAudioInSession session: NextLevelSession) {
    
  }
  
  public func nextLevel(_ nextLevel: NextLevel, didStartClipInSession session: NextLevelSession) {
    
  }
  
  public func nextLevel(_ nextLevel: NextLevel, didCompleteClip clip: NextLevelClip, inSession session: NextLevelSession) {
    
  }
  
  public func nextLevel(_ nextLevel: NextLevel, didAppendVideoSampleBuffer sampleBuffer: CMSampleBuffer, inSession session: NextLevelSession) {
    
  }
  
  public func nextLevel(_ nextLevel: NextLevel, didSkipVideoSampleBuffer sampleBuffer: CMSampleBuffer, inSession session: NextLevelSession) {
    
  }
  
  public func nextLevel(_ nextLevel: NextLevel, didAppendVideoPixelBuffer pixelBuffer: CVPixelBuffer, timestamp: TimeInterval, inSession session: NextLevelSession) {
    
  }
  
  public func nextLevel(_ nextLevel: NextLevel, didSkipVideoPixelBuffer pixelBuffer: CVPixelBuffer, timestamp: TimeInterval, inSession session: NextLevelSession) {
    
  }
  
  public func nextLevel(_ nextLevel: NextLevel, didAppendAudioSampleBuffer sampleBuffer: CMSampleBuffer, inSession session: NextLevelSession) {
    
  }
  
  public func nextLevel(_ nextLevel: NextLevel, didSkipAudioSampleBuffer sampleBuffer: CMSampleBuffer, inSession session: NextLevelSession) {
    
  }
  
  public func nextLevel(_ nextLevel: NextLevel, didCompleteSession session: NextLevelSession) {
    
  }
  
  public func nextLevel(_ nextLevel: NextLevel, didCompletePhotoCaptureFromVideoFrame photoDict: [String : Any]?) {
      self.videoDelegate?.cameraView(self, didCompletePhotoCaptureFromVideoFrame: photoDict)
  }

  // MARK: NextLevelPhotoDelegate
  
  public func nextLevel(_ nextLevel: NextLevel, output: AVCapturePhotoOutput, willBeginCaptureFor resolvedSettings: AVCaptureResolvedPhotoSettings, photoConfiguration: NextLevelPhotoConfiguration) {
    
  }
  var deviceOrientationOnCapture: UIDeviceOrientation?
  public func nextLevel(_ nextLevel: NextLevel, output: AVCapturePhotoOutput, willCapturePhotoFor resolvedSettings: AVCaptureResolvedPhotoSettings, photoConfiguration: NextLevelPhotoConfiguration) {
    self.deviceOrientationOnCapture = UIDevice.current.orientation
  }
  
  public func nextLevel(_ nextLevel: NextLevel, output: AVCapturePhotoOutput, didCapturePhotoFor resolvedSettings: AVCaptureResolvedPhotoSettings, photoConfiguration: NextLevelPhotoConfiguration) {
  }
  
  public func nextLevel(_ nextLevel: NextLevel, didFinishProcessingPhoto photo: AVCapturePhoto, photoDict: [String : Any], photoConfiguration: NextLevelPhotoConfiguration) {
    let photoMetadata = photo.metadata
    // Returns corresponting NSCFNumber. It seems to specify the origin of the image
    //                print("Metadata orientation: ",photoMetadata["Orientation"])

    // Returns corresponting NSCFNumber. It seems to specify the origin of the image
    print("Metadata orientation with key: ",photoMetadata[String(kCGImagePropertyOrientation)] as Any)

    guard let imageData = photo.fileDataRepresentation() else {
        print("Error while generating image from photo capture data.");
        return
    }

    guard let uiImage = UIImage(data: imageData) else {
        print("Unable to generate UIImage from image data.");
        return
    }

    // generate a corresponding CGImage
    guard let cgImage = uiImage.cgImage else {
        print("Error generating CGImage")
        return
    }

    guard let deviceOrientationOnCapture = self.deviceOrientationOnCapture else {
        print("Error retrieving orientation on capture")
        return
    }

    var image = UIImage(cgImage: cgImage, scale: 1.0, orientation: deviceOrientationOnCapture.getUIImageOrientationFromDevice())

    self.photoDelegate?.cameraView(self, didFinishProcessingPhoto: image,  photoDict: photoDict, photoConfiguration: NSCameraViewPhotoConfiguration(configuration: photoConfiguration))
  }
  
  public func nextLevelDidCompletePhotoCapture(_ nextLevel: NextLevel) {

  }
  
}

extension UIDeviceOrientation {
    func getUIImageOrientationFromDevice() -> UIImage.Orientation {
        // return CGImagePropertyOrientation based on Device Orientation
        // This extented function has been determined based on experimentation with how an UIImage gets displayed.
        switch self {
        case UIDeviceOrientation.portrait, .faceUp: return UIImage.Orientation.right
        case UIDeviceOrientation.portraitUpsideDown, .faceDown: return UIImage.Orientation.left
        case UIDeviceOrientation.landscapeLeft: return UIImage.Orientation.up // this is the base orientation
        case UIDeviceOrientation.landscapeRight: return UIImage.Orientation.down
        case UIDeviceOrientation.unknown: return UIImage.Orientation.up
        }
    }
}
