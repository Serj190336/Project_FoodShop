import Search from './models/search' //import class Search
import * as searchView from './views/searchView'
import { elements, renderLoader, clearLoader } from './views/base'
import * as modal from './models/modal'

/** Global state of the app
 * - Current recipe object
 * - Shopping list object
 * - Like recipes
 */
const state = {};

const controlSearch = async () => { // new async function for Search input
    // 1) Get query from view 
    const query = searchView.getInput();

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

        //modal event
        modal.displayModal();

        

        

    }
}
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();

})

// ***
// const searchPizza = new Search('pizza'); //отдельный класс поиска пиццы
// он сейчас в state 
// console.log(searchPizza);
//searchPizza.getResults();
// ***

