const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {images.map(({ id, webformatURL }) => {
        return (
          <li key={id}>
            <img src={webformatURL} alt="" />
          </li>
        );
      })}
    </>
  );
};

export default ImageGalleryItem;
