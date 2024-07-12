import {
  inputPictures,
  showLoading,
  hideLoading,
  errorParams,
  noMoreLoading,
} from './js/render-functions';
import { fetchParams } from './js/pixabay-api';

const formSearch = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery-container');
const loadingButton = document.querySelector('.btn-load');

let currentQuery = '';
let currentPage = 1;

formSearch.addEventListener('submit', getPicturesByValue);
loadingButton.addEventListener('click', getMorePictures);

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
  currentQuery = inputValue;
  currentPage = 1;

  try {
    const picturesResponse = await fetchParams(currentQuery, currentPage);
    inputPictures(picturesResponse);
    loadingButton.style.display = 'flex';
  } catch (err) {
    errorParams();
  } finally {
    form.reset();
    hideLoading();
  }
}
async function getMorePictures() {
  showLoading();
  currentPage += 1;
  const totalHits = 60 / 15;
  try {
    if (currentPage === totalHits) {
      loadingButton.style.display = 'none';
      noMoreLoading();
    }
    const picturesResponse = await fetchParams(currentQuery, currentPage);
    inputPictures(picturesResponse);
    gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (err) {
    errorParams();
  } finally {
    hideLoading();
  }
}
// loadingButton.addEventListener('click', getMorePictures);
// function getMorePictures() {
//   console.log(loadingButton);
// }
