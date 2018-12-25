import axios from 'axios'; // import 'axious' from JSON, used instead of fetch for older browsers
import {key} from '../config';
export const displayModal = () => {
  var modal = document.getElementById('myModal');

  const resultsLink2 = document.querySelectorAll('.results__link');
  let links2;
  for (var i = 0; i < resultsLink2.length; i++) {
    links2 = resultsLink2[i];
    links2.addEventListener('click', function (e) {
      modal.style.display = "block";
    });
  }


  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  // resultsLink2.onclick = function() {
  //   modal.style.display = "block";
  // }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  console.log('from modaljs')




  

}