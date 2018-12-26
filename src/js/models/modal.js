import axios from 'axios'; // import 'axious' from JSON, used instead of fetch for older browsers
import {key} from '../config';

export const displayModal = () => {

  const modalId = document.querySelector('#myModal');
  const resultsLink = document.querySelectorAll('.results__link');
  console.log(resultsLink)
  resultsLink.forEach(el => {
    el.addEventListener('click', function (e) {
          modalId.style.display = "block";
          console.log(e.currentTarget.dataset.recipeid);
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