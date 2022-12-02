import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ id, webformatURL }) => {
        return <ImageGalleryItem key={id} url={webformatURL} />;
      })}
    </ul>
  );
};

export default ImageGallery;
