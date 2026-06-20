// Images for the Gallery carousel. Drop your files in /public/gallery/ and list them here.
// Each image is shown as a 1:1 square in a carousel. Square images crop best.
// Note: use web formats (jpg/png/webp) — browsers can't display camera RAW files (.DNG/.RAW).

export type GalleryItem = {
  /** Path under /public/gallery, e.g. "/gallery/photo-1.jpg". */
  src: string;
  /** Describes the image (accessibility) and shows as the caption. */
  alt: string;
};

export const gallery: GalleryItem[] = [
  { src: "/gallery/IMG_8198.jpg", alt: "" },
  { src: "/gallery/IMG_8203.jpg", alt: "" },
  { src: "/gallery/IMG_8204.jpg", alt: "" },
  { src: "/gallery/IMG_8211.jpg", alt: "" },
  { src: "/gallery/IMG_8256.jpg", alt: "" },
];
