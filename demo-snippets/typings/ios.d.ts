declare class NSCropView extends UIView {
    static alloc(): NSCropView; // inherited from NSObject

    static appearance(): NSCropView; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): NSCropView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NSCropView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NSCropView; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NSCropView; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): NSCropView; // inherited from UIAppearance

    static new(): NSCropView; // inherited from NSObject

    image: UIImage;

    imageSize: CGSize;

    quads: NSArray<any>;
}

declare class OpencvDocumentProcessDelegate extends NSObject {
    static alloc(): OpencvDocumentProcessDelegate; // inherited from NSObject

    static new(): OpencvDocumentProcessDelegate; // inherited from NSObject

    cropView: NSCropView;

    constructor(o: { cropView: NSCropView });

    initWithCropView(view: NSCropView): this;
}
