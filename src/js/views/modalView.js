import Modal from '../models/modal'
import {
  elements
} from '../views/base'





// Prepare modal
export const createModal = () => {
  // add EventListener to every created link
  const resultsLink = document.querySelectorAll('.results__link');
  resultsLink.forEach(el => {
    el.addEventListener('click', async (e) => {

      // 1) display (open) modal window
      elements.modalBlock.style.display = "block";

      // 2) Create <span> x close button and remove results
      elements.modalContent.innerHTML = `<span class="closemodal">&times;</span>
      <p>Some text in the Modal..</p>`;
      // Get the <span> element that closes the modal
      // When the user clicks on <span> (x), close the modal
      const closeModal = document.querySelector('.closemodal');
      closeModal.onclick = function () {
        elements.modalBlock.style.display = "none";
      }

      // 3) Close modal when the user clicks anywhere outside of the modal
      window.onclick = function (event) {
        if (event.target == elements.modalBlock) {
          elements.modalBlock.style.display = "none";
        }
      }
      console.log('from modaljs')


      //
      // Modal class and ID of clicked recipe
        let modalState = {},
        datasetRecipeId = e.currentTarget.dataset.recipeid;
        modalState = new Modal(datasetRecipeId);
        // async send ID to api and get recipe info object
        await modalState.recipeDetails();
        console.log(modalState.image);
        // elements.modalContent.innerHTML = `<span class="closemodal">&times;</span>
        // <p>Some text in the Modal..</p>`;
    })
  })
}

// Load info from API