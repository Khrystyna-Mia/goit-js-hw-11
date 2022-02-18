import ImagesApiService from './apiService';
import imgCardsTemplates from '../templates/imgCards.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
    searchForm: document.querySelector('.search-form'),
    container: document.querySelector('.gallery'),
    loading: document.querySelector('#loading'),
    btn: document.querySelector('[type="submit"]')

}

const imagesApiService = new ImagesApiService();

const lightbox = new SimpleLightbox('.js-gallery a', {
    captions: true,
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

    
refs.searchForm.addEventListener('submit', onSearch);

async function onSearch(evt) {
    evt.preventDefault();

    imagesApiService.searchQuery = evt.currentTarget.elements.searchQuery.value;

    const getImages = await imagesApiService.fetchImg();
    if (getImages.hits.length === 0) {
        Notify.failure(`😔 Sorry, there are no images matching your search query. Please try again.`);
    } else {
        Notify.success(`🙂 Hooray! We found ${getImages.totalHits} images`);
        
        clearGallery();
        imagesApiService.resetPage();

        const galleryMarkup = imgCardsTemplates(getImages.hits);
        galleryCardsMarkup(galleryMarkup);

        lightbox.refresh();
    }

    console.log(getImages);

}

function clearGallery() {
    refs.container.innerHTML = '';
}

function galleryCardsMarkup(items) {
    refs.container.insertAdjacentHTML('beforeend', items);
}