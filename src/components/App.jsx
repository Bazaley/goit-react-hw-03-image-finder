import { Component } from 'react';
import { fetchImages } from '../services/pixabayApi';
import { desiredQueryProperties } from '../Utils/desiredQueryProperties';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

import { BallTriangle } from 'react-loader-spinner';

class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    showButton: false,
    notification: false,
    isLoader: false,
  };

  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;

    try {
      this.setState({ isLoader: true });
      const {
        data: { hits },
      } = await fetchImages(query, page);

      if (
        (query !== prevState.query || page !== prevState.page) &&
        hits.length !== 0
      ) {
        this.setState(prevState => ({
          images: [...prevState.images, ...desiredQueryProperties(hits)],
          showButton: true,
          isLoader: false,
        }));
      }

      if (!hits.length) {
        this.setState({ notification: true });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  getImages = query => {
    this.setState({
      query,
      images: [],
      page: 1,
      showButton: false,
      notification: false,
    });
  };

  onLoadeMore = e => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, showButton, notification, isLoader } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.getImages} />
        <ImageGallery images={images} />
        {showButton && (
          <Button text="Loade more" onLoadeMore={this.onLoadeMore} />
        )}
        {notification && <p>notification</p>}
        {isLoader && (
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        )}
      </>
    );
  }
}

export default App;
