import { Component } from 'react';
import { Header, Form, Button, Input } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    text: '',
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.onSubmit}>
          <Button type="submit">
            <span className="button-label">Search</span>
          </Button>

          <Input
            className="input"
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
