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

      let response;
      try {
        response = await axios(`http://food2fork.com/api/get?key=${key}&rId=${this.id}`);
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
        elements.modalContent.insertAdjacentHTML('beforeend', modalContentMarkup);
    
      }
    }
}

