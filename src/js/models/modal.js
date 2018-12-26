import axios from 'axios'; // import 'axious' from JSON, used instead of fetch for older browsers
import { key } from '../config';

export const displayModal = () => {

  const modalId = document.querySelector('#myModal');
  const resultsLink = document.querySelectorAll('.results__link');
  // add EventListener to every link
  resultsLink.forEach(el => {
    el.addEventListener('click', function (e) {
      // display modal window
      modalId.style.display = "block";
      // id of clicked recipe
      let datasetRecipeId = e.currentTarget.dataset.recipeid; 
      // async send ID to api and get recipe info object
      const xe = async (id) => {
        let response;
        try {
          return response = await axios(`http://food2fork.com/api/get?key=${key}&rId=${id}`);
          
        } catch (error) {
          console.log(error);
          alert('Something went wrong')
        }
      }

      var xy =  xe(datasetRecipeId);
      console.log(xy);

    })
  })

  // Get the <span> element that closes the modal
  var span = document.querySelector('.close');


  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modalId.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modalId) {
      modalId.style.display = "none";
    }
  }
  console.log('from modaljs')

}

// Load info from API
// async function recipeDetails(id) {
//   let response;
//   try {
//     response = await axios(`http://food2fork.com/api/get?key=${key}&rId=${id}`);
//     //console.log(response.data.recipe);
//   } catch (error) {
//     console.log(error);
//     alert('Something went wrong')
//   }
//   return response;
// }
