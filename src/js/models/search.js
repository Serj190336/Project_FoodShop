import axios from 'axios'; // import 'axious' from JSON, used instead of fetch for older browsers

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        //const proxy = 'https://cors-anywhere.herokuapp.com/'; // cors proxy
        const key = '0579fc3fdf41ff562355c839160610df'; // own API key
        try {
            //const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            const res = await axios(`http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes; //'query' search result as objects from API
            console.log(res, this.result )
        } catch (error) {
            console.log(res, this.result )
            //alert(error);
        }
    }
}