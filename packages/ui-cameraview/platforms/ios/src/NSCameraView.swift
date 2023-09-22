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
public class NSCameraView: UIView, NextLevelVideoDelegate {
  public weak var processingDelegate: ProcessRawVideoSampleBufferDelegate?
  var nextLevel: NextLevel?
  
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
      nextLevel.videoDelegate = self
      // nextLevel.photoDelegate = self
      // nextLevel.metadataObjectsDelegate = self
      
      nextLevel.automaticallyUpdatesDeviceOrientation = true
      
      // video configuration
      nextLevel.videoConfiguration.preset = AVCaptureSession.Preset.hd1280x720
      nextLevel.videoConfiguration.bitRate = 5500000
      nextLevel.videoConfiguration.maxKeyFrameInterval = 30
      nextLevel.videoConfiguration.profileLevel = AVVideoProfileLevelH264HighAutoLevel
      
      // audio configuration
      // for now disable audio
      nextLevel.captureMode = NextLevelCaptureMode.videoWithoutAudio
      //    nextLevel.audioConfiguration.bitRate = 96000
      //    nextLevel.disableAudioInputDevice()
      // metadata objects configuration
      // nextLevel.metadataObjectTypes = [AVMetadataObject.ObjectType.face, AVMetadataObject.ObjectType.qr]
    }
  }
  
  func startPreview() throws {
    do {
        try self.nextLevel?.start()
    } catch {
      let nextLevelError = error as! NextLevelError
      // re throw the error with the description so that N can correctly show the error message
      throw RuntimeError(nextLevelError.description)
    }
    
  }
  
  func stopPreview() {
    self.nextLevel?.stop()
  }
  func toggleCamera() {
    self.nextLevel?.flipCaptureDevicePosition()
  }
  
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
    
  }
}
