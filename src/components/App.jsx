import { Component } from 'react';
import { Section } from './Section/Section';
import { fetchImages } from '../services/pixabayApi';
import { desiredQueryProperties } from '../Utils/desiredQueryProperties';
import { Header } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import Modal from './Modal/Modal';
import { Circles } from 'react-loader-spinner';
import { Notification } from './Notification/Notification';
import { animateScroll as scroll } from 'react-scroll';

class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    imageModal: null,
    showButton: false,
    notification: false,
    isLoader: false,
  };

  componentDidUpdate(_, prevState) {
    const { page, query } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { page, query } = this.state;

    try {
      this.setState({ isLoader: true, showButton: false });

      const {
        data: { hits, totalHits },
      } = await fetchImages(query, page);
      if (!hits.length) {
        this.setState({
          notification: true,
          isLoader: false,
        });
        return;
      }

      this.setState(prevState => ({
        isLoader: false,
        images: [...prevState.images, ...desiredQueryProperties(hits)],
        showButton: this.state.page < Math.ceil(totalHits / 12),
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  requestHandler = query => {
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
    this.scrollToTop();
  };

  openModal = image => {
    this.setState({ imageModal: image });
  };

  closeModal = () => {
    this.setState({ imageModal: null });
  };

  scrollToTop = () => {
    scroll.scrollMore(755);
  };

  render() {
    const { images, showButton, notification, isLoader, imageModal } =
      this.state;
    return (
      <>
        <Header onSubmit={this.requestHandler} />
        <Section>
          <ImageGallery images={images} openModal={this.openModal} />
          {showButton && (
            <Button text="Loade more" onLoadeMore={this.onLoadeMore} />
          )}
          {notification && (
            <Notification text="Sorry, no images were found for your search." />
          )}
          {isLoader && (
            <Circles
              height="80"
              width="80"
              color="#4747bc"
              ariaLabel="circles-loading"
              wrapperStyle={{ justifyContent: 'center' }}
              wrapperClass=""
              visible={true}
            />
          )}
        </Section>

        {imageModal && (
          <Modal image={imageModal} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}

export default App;
