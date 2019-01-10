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

        this.title = recipeResponse.data.recipe.title;
        this.image = recipeResponse.data.recipe.image_url;
        this.orderID = recipeResponse.data.recipe.recipe_id;

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

// recipe:

  // f2f_url: "http://food2fork.com/view/47746"
  // image_url: "http://static.food2fork.com/best_pizza_dough_recipe1b20.jpg"

  // ingredients: Array(6)
    // 0: "4 1/2 cups (20.25 ounces) unbleached high-gluten, bread, or all-purpose flour, chilled"
    // 1: "1 3/4 (.44 ounce) teaspoons salt"
    // 2: "1 teaspoon (.11 ounce) instant yeast"
    // 3: "1/4 cup (2 ounces) olive oil (optional)"
    // 4: "1 3/4 cups (14 ounces) water, ice cold (40F)"
    // 5: "Semolina flour OR cornmeal for dusting"
    // length: 6

  // publisher: "101 Cookbooks"
  // publisher_url: "http://www.101cookbooks.com"
  // recipe_id: "47746"
  // social_rank: 100
  // source_url: "http://www.101cookbooks.com/archives/001199.html"
  // title: "Best Pizza Dough Ever"