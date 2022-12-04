import { Component } from 'react';
import { Button, Input, Wrapper } from './SearchForm.styled';

class SearchForm extends Component {
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
    );
  }
}

export default SearchForm;
