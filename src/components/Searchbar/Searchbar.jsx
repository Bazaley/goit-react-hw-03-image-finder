import { Component } from 'react';
import { Header, Button, Input, Wrapper } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <Header>
        <form onSubmit={this.onSubmit}>
          <Wrapper>
            <Button type="submit">
              <span>Search</span>
            </Button>

            <Input
              type="text"
              name="query"
              value={this.state.query}
              onChange={this.handleChange}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </Wrapper>
        </form>
      </Header>
    );
  }
}

export default Searchbar;
