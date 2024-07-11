import {
  inputPictures,
  showLoading,
  hideLoading,
  errorParams,
} from './js/render-functions';
import { fetchParams } from './js/pixabay-api';
const formSearch = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery-container');

formSearch.addEventListener('submit', getPicturesByValue);
async function getPicturesByValue(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const inputValue = form.elements.inputtext.value.toLowerCase().trim();
  if (inputValue === '') {
    hideLoading();
    return errorParams();
  }
  showLoading();
  gallery.innerHTML = '';
  try {
    const picturesResponse = await fetchParams(inputValue);
    inputPictures(picturesResponse);
    form.reset();
  } catch (err) {
    errorParams();
  }

  // .then(inputPictures)
  // .catch(errorParams)
  // .finally(() => form.reset());
}
