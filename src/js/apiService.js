import axios from "axios";

const API_URL = `https://pixabay.com/api/`;
const API_KEY = '25738205-42a7db76025be689580da6194';


export default class ImagesApiService {
    constructor() {
        this.query = '';
        this.page = 1;
    }

    async fetchImg(page) {
        const response = await axios.get(`${API_URL}?key=${API_KEY}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`);
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
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }
}