import axios from 'axios'; // import 'axious' from JSON, used instead of fetch for older browsers
import {
  key
} from '../config';
import { elements } from '../views/base'

  export default class Modal {
    constructor(id) {
        this.id = id;
    }

    async recipeDetails() {
      try {
        const recipeResponse = await axios(`http://food2fork.com/api/get?key=${key}&rId=${this.id}`);
        this.idCheck = recipeResponse;
        this.image = recipeResponse.data.recipe.image_url;

      } catch (error) {
        console.log(error);
        alert('Something went wrong')
      }
      // check if ID is not correct
      // if (recipeResponse.data.recipe.length == 0)
      //   console.log("no matches in database");
      // else {
    
      //   let modalContentMarkup = `<img src="${recipeResponse.data.recipe.image_url}">`;
      //   //console.log(modalContent, modalContentMarkup)
      //   elements.modalContent.insertAdjacentHTML('beforeend', modalContentMarkup);
    
      // }
    }
}

