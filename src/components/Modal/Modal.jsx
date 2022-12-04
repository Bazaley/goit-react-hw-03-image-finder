import { Component } from 'react';
import { Backdrop, ModalW } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };

  handleClickByBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <Backdrop onClick={this.handleClickByBackdrop}>
        <ModalW>
          <img src={this.props.image} alt="" />
        </ModalW>
      </Backdrop>
    );
  }
}

export default Modal;
