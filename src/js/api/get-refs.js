export default function getRefs() {
    return {
        searchForm: document.querySelector('.search-form'),
        container: document.querySelector('.gallery'),
        loading: document.querySelector('#loading'),
        btn: document.querySelector('[type="submit"]')
    };
}