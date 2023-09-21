/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

declare namespace com {
    export namespace nativescript {
        export namespace cameraviewdemo {
            export class CropView extends globalAndroid.view.View {
                public static class: java.lang.Class<CropView>;
                public getQuads(): java.util.List<models.Quad>;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
                public sendAccessibilityEvent(param0: number): void;
                public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public constructor(param0: globalAndroid.content.Context);
                public getImageHeight(): number;
                public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                public setImageWidth(param0: number): void;
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                public setColors(param0: java.util.List<java.lang.Integer>): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                public setQuads(param0: java.util.List<models.Quad>): void;
                public getColors(): java.util.List<java.lang.Integer>;
                public getImagePreviewBounds(): globalAndroid.graphics.RectF;
                public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                public onDraw(param0: globalAndroid.graphics.Canvas): void;
                public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
                public setImageHeight(param0: number): void;
                public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                public setImagePreviewBounds(param0: number, param1: number, param2: number, param3: number): void;
                public getImageWidth(): number;
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraviewdemo {
            export class CustomImageAnalysisCallback extends java.lang.Object {
                public static class: java.lang.Class<CustomImageAnalysisCallback>;
                public findDocumentCorners(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number): java.util.List<java.util.List<globalAndroid.graphics.Point>>;
                public process(param0: globalAndroid.media.Image, param1: androidx.camera.core.ImageInfo, param2: cameraview.ImageAsyncProcessor): void;
                public constructor(param0: globalAndroid.content.Context, param1: CropView);
            }
            export namespace CustomImageAnalysisCallback {
                export class Companion extends java.lang.Object {
                    public static class: java.lang.Class<Companion>;
                    public findDocumentCorners(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number): java.util.List<java.util.List<globalAndroid.graphics.Point>>;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraviewdemo {
            export class YuvByteBuffer extends java.lang.Object {
                public static class: java.lang.Class<YuvByteBuffer>;
                public constructor(param0: globalAndroid.media.Image, param1: java.nio.ByteBuffer);
                public getType(): number;
                public getBuffer(): java.nio.ByteBuffer;
            }
            export namespace YuvByteBuffer {
                export class ImageWrapper extends java.lang.Object {
                    public static class: java.lang.Class<ImageWrapper>;
                    public getY(): PlaneWrapper;
                    public getHeight(): number;
                    public getWidth(): number;
                    public getV(): PlaneWrapper;
                    public getU(): PlaneWrapper;
                    public constructor(param0: globalAndroid.media.Image);
                }
                export class PlaneWrapper extends java.lang.Object {
                    public static class: java.lang.Class<PlaneWrapper>;
                    public getRowStride(): number;
                    public getBuffer(): java.nio.ByteBuffer;
                    public getHeight(): number;
                    public getPixelStride(): number;
                    public getWidth(): number;
                    public constructor(param0: number, param1: number, param2: globalAndroid.media.Image.Plane);
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraviewdemo {
            export class YuvToRgbConverter extends java.lang.Object {
                public static class: java.lang.Class<YuvToRgbConverter>;
                public destroy(): void;
                public constructor(param0: globalAndroid.content.Context);
                public yuvToRgb(param0: globalAndroid.media.Image, param1: globalAndroid.graphics.Bitmap): void;
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraviewdemo {
            export class YuvType extends java.lang.Object implements java.lang.annotation.Annotation {
                public static class: java.lang.Class<YuvType>;
                /**
                 * Constructs a new instance of the com.nativescript.cameraviewdemo.YuvType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { equals(param0: any): boolean; hashCode(): number; toString(): string; annotationType(): java.lang.Class<any> });
                public constructor();
                public hashCode(): number;
                public equals(param0: any): boolean;
                public annotationType(): java.lang.Class<any>;
                public toString(): string;
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraviewdemo {
            export namespace models {
                export class Line extends java.lang.Object {
                    public static class: java.lang.Class<Line>;
                    public constructor(param0: globalAndroid.graphics.PointF, param1: globalAndroid.graphics.PointF);
                    public getFrom(): globalAndroid.graphics.PointF;
                    public getTo(): globalAndroid.graphics.PointF;
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraviewdemo {
            export namespace models {
                export class Quad extends java.lang.Object {
                    public static class: java.lang.Class<Quad>;
                    public getCornerClosestToPoint(param0: globalAndroid.graphics.PointF): QuadCorner;
                    public mapOriginalToPreviewImageCoordinates(param0: globalAndroid.graphics.RectF, param1: number): Quad;
                    public constructor(param0: java.util.List<any>);
                    public constructor(param0: globalAndroid.graphics.Point, param1: globalAndroid.graphics.Point, param2: globalAndroid.graphics.Point, param3: globalAndroid.graphics.Point);
                    public getBottomLeftCorner(): globalAndroid.graphics.PointF;
                    public getEdges(): androidNative.Array<Line>;
                    public applyRatio(param0: number): Quad;
                    public mapPreviewToOriginalImageCoordinates(param0: globalAndroid.graphics.RectF, param1: number): Quad;
                    public moveCorner(param0: QuadCorner, param1: number, param2: number): void;
                    public getTopRightCorner(): globalAndroid.graphics.PointF;
                    public setCorners(param0: java.util.Map<QuadCorner, globalAndroid.graphics.PointF>): void;
                    public constructor(param0: globalAndroid.graphics.PointF, param1: globalAndroid.graphics.PointF, param2: globalAndroid.graphics.PointF, param3: globalAndroid.graphics.PointF);
                    public getCorners(): java.util.Map<QuadCorner, globalAndroid.graphics.PointF>;
                    public getTopLeftCorner(): globalAndroid.graphics.PointF;
                    public getBottomRightCorner(): globalAndroid.graphics.PointF;
                }
                export namespace Quad {
                    export class Companion extends java.lang.Object {
                        public static class: java.lang.Class<Companion>;
                        public getQuadAndCornerClosestToPoint(param0: java.util.List<Quad>, param1: globalAndroid.graphics.PointF): any;
                    }
                }
            }
        }
    }
}

declare namespace com {
    export namespace nativescript {
        export namespace cameraviewdemo {
            export namespace models {
                export class QuadCorner {
                    public static class: java.lang.Class<QuadCorner>;
                    public static TOP_LEFT: QuadCorner;
                    public static TOP_RIGHT: QuadCorner;
                    public static BOTTOM_RIGHT: QuadCorner;
                    public static BOTTOM_LEFT: QuadCorner;
                    public static values(): androidNative.Array<QuadCorner>;
                    public static valueOf(param0: string): QuadCorner;
                    public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                }
            }
        }
    }
}

//Generics information:
