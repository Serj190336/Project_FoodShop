import axios from 'axios'; // import 'axious' from JSON, used instead of fetch for older browsers
import {
  key
} from '../config';

const modalContent = document.querySelector('.modal-content');
const modalBlock = document.querySelector('#myModal');

// Prepare modal
export const createModal = () => {


  const resultsLink = document.querySelectorAll('.results__link');

  // add EventListener to every link
  resultsLink.forEach(el => {
    el.addEventListener('click', function (e) {
      // display modal window
      modalBlock.style.display = "block";

      // Create <span> x close button
      modalContent.innerHTML = `<span class="close">&times;</span>
      <p>Some text in the Modal..</p>`;
      // Get the <span> element that closes the modal
      var span = document.querySelector('.close');
      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modalBlock.style.display = "none";
      }
      //
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modalBlock) {
          modalBlock.style.display = "none";
        }
      }
      console.log('from modaljs')

      // id of clicked recipe
      let datasetRecipeId = e.currentTarget.dataset.recipeid;
      // async send ID to api and get recipe info object
      recipeDetails(datasetRecipeId);

    })
  })





}

// Load info from API
async function recipeDetails(id) {

  let response;
  try {
    response = await axios(`http://food2fork.com/api/get?key=${key}&rId=${id}`);
    //console.log(response.data.recipe.image_url);
  } catch (error) {
    console.log(error);
    alert('Something went wrong')
  }
  if (response.data.recipe.length == 0)
    console.log("no results in database");
  else {

    let modalContentMarkup = `<img src="${response.data.recipe.image_url}">`;
    //console.log(modalContent, modalContentMarkup)
    modalContent.insertAdjacentHTML('beforeend', modalContentMarkup);

  }
}