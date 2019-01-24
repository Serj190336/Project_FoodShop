import Modal from '../models/modal'
import {
  elements,
  renderLoader,
  clearLoader
} from '../views/base'

let modalID = {};
// Create modal
export const createModal = () => {
  // add EventListener to every created link
  const resultsLink = document.querySelectorAll('.results__link');
  resultsLink.forEach(el => {
    el.addEventListener('click', async (e) => {

      // 1) display (open) modal window
      elements.modalBlock.style.display = "block";

      // 2) Create <span> x close button and text
      elements.modalContent.innerHTML = `<span class="closemodal">&times;</span>`;

      // 3) onlick functions to close modal window
      closeModalWindow();

      // 4) render spinner
      renderLoader(elements.modalContent);

      // 5) Modal class and ID of clicked recipe
      modalID = new Modal(e.currentTarget.dataset.recipeid);

      // 6) send ID to API and receive recipe properties 
      await modalID.recipeDetails();

      // 7) removing loader spinner
      clearLoader();

      // 8) render results
      const modalCont = `
      <div>
        <div>
          <h2>${modalID.title}</h2>
          <img src="${modalID.image}" alt="${modalID.title}">
        </div>
        <div>
          <ul class='ul-ingredients'>
            <div>Ingredietns:</div>
          </ul>
          <p>Order Code: ${modalID.orderID}</p>
        </div>
      </div>
      `;
      // loop through ingredients
      elements.modalContent.insertAdjacentHTML('beforeend', modalCont);
      let ul = document.querySelector('.ul-ingredients')
      modalID.ingredients.forEach(function (item) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += item;
      });

    })
  })
}


// 3) onlick functions to close modal window
// Close modal and Clear results modal
function closeModalWindow() {
  // Get the <span> element that closes the modal
  // Close modal when the user clicks on <span> (x)
  let closeModal = document.querySelector('.closemodal');

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


