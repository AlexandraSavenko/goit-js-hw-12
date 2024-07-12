import axios from 'axios';

export async function fetchParams(query, page) {
  let per_page = 15;
  const params = {
    key: '44790874-b72b714502b79af1442269c5d',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: per_page,
    page: page,
  };
  try {
    const response = await axios.get('https://pixabay.com/api/', { params });
    const data = response.data;

    return data;
  } catch (error) {
    throw new Error(error.response.status);
  }
}
