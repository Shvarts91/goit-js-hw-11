import { axiosImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('form');
const input = document.querySelector('.input-form');
const listImages = document.querySelector('.list-images');
const loader = document.querySelector('.loader');

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (!input.value.trim()) {
    return;
  }
  clearListImages();
  loader.classList.add('is-active');
  axiosImages(input.value).then(response => {
    loader.classList.remove('is-active');
    if (response?.length === 0) {
      return iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: '#fafafb',
        messageSize: '16',
      });
    }

    if (!response) return;

    renderImages(response);
    gallery.refresh();
  });
});

function clearListImages() {
  return (listImages.innerHTML = '');
}

let gallery = new SimpleLightbox('.list-images a');
gallery.on('show.simplelightbox', function () {});
