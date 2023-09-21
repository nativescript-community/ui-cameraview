import UIKit

@objcMembers
@objc(NSCameraView)
class NSCameraView: UIView {
  var previewView:Float = 1.0;
  var textContainerInset: UIEdgeInsets = UIEdgeInsets.zero
  var padding: UIEdgeInsets = UIEdgeInsets.zero
  var borderThickness:UIEdgeInsets = UIEdgeInsets.zero
  override init(frame: CGRect) {
    super.init(frame: frame )
    commonInit()
    
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
    commonInit()
  }
  
  func commonInit() {
    self.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    self.backgroundColor = UIColor.black
    NextLevel.shared.previewLayer.frame = self.bounds
    self.layer.addSublayer(NextLevel.shared.previewLayer)
  }
  
  
  override func viewDidLoad() {
    // Configure NextLevel by modifying the configuration ivars
    let nextLevel = NextLevel.shared
    nextLevel.delegate = self
    nextLevel.deviceDelegate = self
    nextLevel.flashDelegate = self
    nextLevel.videoDelegate = self
    nextLevel.photoDelegate = self
    nextLevel.metadataObjectsDelegate = self

    // video configuration
    nextLevel.videoConfiguration.preset = AVCaptureSession.Preset.hd1280x720
    nextLevel.videoConfiguration.bitRate = 5500000
    nextLevel.videoConfiguration.maxKeyFrameInterval = 30
    nextLevel.videoConfiguration.profileLevel = AVVideoProfileLevelH264HighAutoLevel

    // audio configuration
    nextLevel.audioConfiguration.bitRate = 96000

    // metadata objects configuration
    // nextLevel.metadataObjectTypes = [AVMetadataObject.ObjectType.face, AVMetadataObject.ObjectType.qr]
 }

 func startPreview() {
    do {
        try NextLevel.shared.start()
    } catch {
        print("NextLevel, failed to start camera session")
    }

 }

 func stopPreview() {
    NextLevel.shared.stop()
 }
 func toggleCamera() {
    NextLevel.shared.flipCaptureDevicePosition()
 }
}
