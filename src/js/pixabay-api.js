import axios from 'axios';
import iziToast from 'izitoast';

export async function fetchParams(item) {
  let per_page = 15;
  let page = 1;
  const params = {
    key: '44790874-b72b714502b79af1442269c5d',
    q: item,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: per_page,
    page: page,
  };
  try {
    const response = await axios.get('https://pixabay.com/api/', { params });
    const data = response.data;

    page += 1;
    const loadingButton = document.querySelector('.btn-load');
    if (page > 1) {
      loadingButton.style.display = 'flex';
    }
    const totalResult = Math.ceil(data.total / per_page);
    if (page > totalResult) {
      return iziToast.error({
        position: 'topRight',
        message: "We're sorry, there are no more posts to load",
      });
    }
    return data;
  } catch (error) {
    throw new Error(error.response.status);
  }
}
