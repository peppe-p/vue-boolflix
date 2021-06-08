/* Milestone 2:
Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente
gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API(le flag non ci sono in FontAwesome).
Allarghiamo poi la ricerca anche alle serie tv.
Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query
sia le serie tv, stando attenti ad avere alla fine dei valori simili
(le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)
*/

const app = new Vue({
    el: "#root",
    data: {
        api_key: "29ba452e71ed0b0015f2c334d30767e2",
        list_film: "",
        list_tv: "",
        search_content: "",
    },

    methods: {

    },

    mounted() {
        const searchBttn = document.getElementById("search");
        searchBttn.addEventListener("click", () => {
            const urlFIlm = `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${this.search_content}&page=1`;
            const urlTV = `https://api.themoviedb.org/3/search/tv?api_key=${this.api_key}&query=${this.search_content}&page=1`;

            /* Request for FILM */
            axios
                .get(urlFIlm)
                .then(info => {
                    this.list_film = info.data.results;
                });

            /* Request for TV Series */
            axios
                .get(urlTV)
                .then(info => {
                    this.list_tv = info.data.results;
                })
        });
    }
});