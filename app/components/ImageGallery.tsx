import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

type GalleryProps = {
  images: string[];
  className?: string; // allow passing custom className
};

export default function Gallery({ images, className }: Readonly<GalleryProps>) {
  if (!images || images.length === 0) {
    return null; // fallback if no images
  }

  return (
    <PhotoProvider className='bg-black/50'>
    <div
        className={
          className ||
          "columns-2 md:columns-3 lg:columns-4 gap-2 [column-fill:_balance]"
        }
      >
        {images.map((src, index) => (
          <PhotoView  key={index} src={src}>
            <img
              src={src}
              loading='lazy'
              alt={`homsleepsalon service ${index + 1}`}
              className="mb-2 w-full break-inside-avoid cursor-pointer"
            />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
}
