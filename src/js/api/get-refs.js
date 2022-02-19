export default function getRefs() {
    return {
        searchForm: document.querySelector('.search-form'),
        container: document.querySelector('.gallery'),
        btn: document.querySelector('[type="submit"]'),
        loading: document.querySelector('#loading')
    };
}