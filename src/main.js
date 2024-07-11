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
function getPicturesByValue(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const inputValue = form.elements.insert.value.toLowerCase().trim();
  if (inputValue === '') {
    hideLoading();
    return errorParams();
  }
  showLoading();
  gallery.innerHTML = '';
  fetchParams(inputValue)
    .then(inputPictures)
    .catch(errorParams)
    .finally(() => form.reset());
}
