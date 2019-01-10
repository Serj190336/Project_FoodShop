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

      // 2) Create <span> x close button and text
      elements.modalContent.innerHTML = `<span class="closemodal">&times;</span>
      <p>Some text in the Modal..</p>`

      // 3) onlick functions to close modal window
      closeModalWindow();

      // 4) 

      // Modal class and ID of clicked recipe
      let modalState = {},
        datasetRecipeId = e.currentTarget.dataset.recipeid;
      modalState = new Modal(datasetRecipeId);
      // async send ID to api and get recipe info object
      await modalState.recipeDetails();
      console.log(modalState.title);
      console.log(modalState.image);
      console.log(modalState.orderID);
      // elements.modalContent.innerHTML = `<span class="closemodal">&times;</span>
      // <p>Some text in the Modal..</p>`;



      // elements.modalContent.innerHTML = `<span class="closemodal">&times;</span>
      // <p>Some text in the Modal..</p>
      // <p>${modalState.image}</p>`;




    })
  })
}


// Close modal and Clear results modal
function closeModalWindow() {
  // Get the <span> element that closes the modal
  // Close modal when the user clicks on <span> (x)
  let closeModal = document.querySelector('.closemodal');
  console.log(closeModal);
  closeModal.onclick = function () {
    // hide modal window
    console.log(closeModal);
    elements.modalBlock.style.display = "none";
    // clear results when close modal
    elements.modalContent.innerHTML = `<span class="closemodal">&times;</span>
          <p>Some text in the Modal..</p>`
  }

  // Close modal when the user clicks anywhere outside of the modal
  window.onclick = function (event) {
    if (event.target == elements.modalBlock) {
      // hide modal window
      elements.modalBlock.style.display = "none";
      // clear results when close modal
      elements.modalContent.innerHTML = `<span class="closemodal">&times;</span>
          <p>Some text in the Modal..</p>`
    }
  }
  console.log('from modaljs')
}