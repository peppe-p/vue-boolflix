/* Milestone 4:
Trasformiamo quello che abbiamo fatto fino ad ora in una vera e propria webapp,creando un layout completo simil-Netflix:
●Un header che contiene logo e search bar
●Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto formadi “card” in cui lo
sfondo è rappresentato dall’immagine di copertina (​consigliola poster_path con w342​)
●Andando con il mouse sopra una card (on hover), appaiono le informazioni
aggiuntive già prese nei punti precedenti più la overview
*/

const app = new Vue({
    el: "#root",
    data: {
        api_key: "29ba452e71ed0b0015f2c334d30767e2",
        list_film: "",
        list_tv: "",
        search_content: "",
        posterPath: "https://image.tmdb.org/t/p/original",
        notFoundFilm: false,
        notFoundTV: false,
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
                    if (info.data.results.length == 0) {
                        this.notFoundFilm = true;
                    } else {
                        this.notFoundFilm = false;
                        this.list_film = info.data.results;
                    }
                });

            /* Request for TV Series */
            axios
                .get(urlTV)
                .then(info => {
                    if (info.data.results.length == 0) {
                        this.notFoundTV = true;
                    } else {
                        this.notFoundTV = false;
                        this.list_tv = info.data.results;
                    }
                })
        });
    }
});