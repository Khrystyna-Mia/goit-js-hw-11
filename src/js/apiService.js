import axios from "axios";
import apiSettings from './settings';

const { imgKey, imgApiUrl } = apiSettings;

export class ImagesApiService {
    constructor() {
        this.searchQuery = '';
        this.pagination = new Pagination({
            onchange(currentPage) {
                this.ImagesApiService(currentPage)
            }
        });
    }

    async fetchImg(page) {
        const response = await axios.get(`${imgApiUrl}?key=${imgKey}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`);
        this.incrementPage();
        return await response.data;
    } catch(error) {
        return error;
    }

    get searchQuery() {
        return this.query;
    }

    set searchQuery(newQuery) {
        this.query = newQuery;
    }

    incrementPage() {
        this.pagination.incrementPage();
    }

    resetPage() {
        this.pagination.resetPage();
    }
}