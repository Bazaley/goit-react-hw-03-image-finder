import { Component } from 'react';
import { fetchImages } from '../services/pixabayApi';
import { desiredQueryProperties } from '../Utils/desiredQueryProperties';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    images: [],
    page: 1,
  };

  getImages = async query => {
    const { page } = this.state;
    const {
      data: { hits },
    } = await fetchImages(query, page);
    this.setState(prevState => ({
      images: [...prevState.images, ...desiredQueryProperties(hits)],
    }));
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.getImages} />
        <ImageGallery images={images} />
      </>
    );
  }
}

export default App;
