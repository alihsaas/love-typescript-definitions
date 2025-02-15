declare module "love.image" {
    /**
     * @link [PixelFormat](https://love2d.org/wiki/PixelFormat)
     */
    export type PixelFormat =
        | "hdr"
        | "normal"
        | "r16"
        | "r16f"
        | "r32f"
        | "r8"
        | "rg11b10f"
        | "rg16"
        | "rg16f"
        | "rg32f"
        | "rg8"
        | "rgb10a2"
        | "rgb565"
        | "rgb5a1"
        | "rgba16f"
        | "rgba16"
        | "rgba32f"
        | "rgba4"
        | "rgba8"
        | "srgb"
        | "srgba8"
        | "stencil8"
        | "depth16"
        | "depth24"
        | "depth32f"
        | "depth24stencil8"
        | "depth32fstencil8"
        | "DXT1"
        | "DXT3"
        | "DXT5"
        | "BC4"
        | "BC4s"
        | "BC5"
        | "BC5s"
        | "BC6h"
        | "BC6hs"
        | "BC7"
        | "ETC1"
        | "ETC2rgb"
        | "ETC2rgba"
        | "ETC2rgba1"
        | "EACr"
        | "EACrs"
        | "EACrg"
        | "EACrgs"
        | "PVR1rgb2"
        | "PVR1rgb4"
        | "PVR1rgba2"
        | "PVR1rgba4"
        | "ASTC4x4"
        | "ASTC5x4"
        | "ASTC5x5"
        | "ASTC6x5"
        | "ASTC6x6"
        | "ASTC8x5"
        | "ASTC8x6"
        | "ASTC8x8"
        | "ASTC10x5"
        | "ASTC10x6"
        | "ASTC10x8"
        | "ASTC10x10"
        | "ASTC12x10"
        | "ASTC12x12";
}
