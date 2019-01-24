import axios from 'axios'; // import 'axious' from JSON, used instead of fetch for older browsers
import { key } from '../config';
import { proxy } from '../config';
export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes; //'query' search result as objects from API
        } catch (error) {
            alert(error);
        }
    }
}

