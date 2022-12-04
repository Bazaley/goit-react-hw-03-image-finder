import { Head } from './Searchbar.styled';
import SearchForm from '../SearchForm/SearchForm';

export const Header = ({ onSubmit }) => {
  return (
    <Head>
      <SearchForm onSubmit={onSubmit} />
    </Head>
  );
};
