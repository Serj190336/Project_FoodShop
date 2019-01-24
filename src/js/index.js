import Search from './models/search' //import class Search
import * as searchView from './views/searchView'
import { elements, renderLoader, clearLoader } from './views/base'
import * as modalView from './views/modalView'

/** Global state of the app
 * - Current recipe object
 * - Shopping list object
 * - Like recipes
 */
const state = {};

const controlSearch = async (query) => { // new async function for Search input
    // 1) Get query from view
    if (query === undefined) {
    query = searchView.getInput();
    }

    if(query) {
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Preapre UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        // 4) Search for recipes
        await state.search.getResults(); //waiting for API response

        // 5) Render results on UI
        clearLoader(); //removing loader spinner
        searchView.renderResults(state.search.result); // display search results on page using forEach

        // Prepare modal on click
        modalView.createModal();


    }
}

// EventListener on search form
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();

})
let query1 = "";
// EventListener on Menu Buttons
elements.leftMenuBtns.addEventListener("click", function(e) {
    if (e.target !== e.currentTarget) { // if clicked element is not parent element
        query1 = e.target.dataset.query;
        console.log(query1);
        controlSearch(query1)
    }
    e.stopPropagation();
});
//

// event listener pagination
elements.searchResPages.addEventListener('click', e => {
    let btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 9);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});



