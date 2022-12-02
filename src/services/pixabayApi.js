import axios from 'axios';

const API_KEY = '31763340-d5ae0b46a2bc908922dfcf2b2';

const fetchImages = async (query, page) => {
  return await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      per_page: 12,
      page,
    },
  });
};

export { fetchImages };
