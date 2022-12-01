import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ul>
      <ImageGalleryItem images={images} />
    </ul>
  );
};

export default ImageGallery;
