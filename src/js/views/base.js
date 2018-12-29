export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchRes: document.querySelector('.results'),
    searchResList: document.querySelector('.results__list'),
    searchResPages: document.querySelector('.results__pages'),
    //modal
    modalContent: document.querySelector('.modal-content'),
    modalBlock: document.querySelector('#myModal')
};

export const elementSrings = {
    loader: 'loader'
}

export const renderLoader = parent => {
    const loader = `
        <div class="loader">
        <svg fill="#666" width="140" height="64" viewBox="0 0 140 64" xmlns="http://www.w3.org/2000/svg">
        <img src="img/oval.svg" />
        </svg>
        </div>  
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
}

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementSrings.loader}`);
    if (loader) {
        loader.parentElement.removeChild(loader);
    }
}

