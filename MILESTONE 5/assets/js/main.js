/* Milestone 5 (Opzionale):
Partendo da un film o da una serie, richiedere all'API quali sono gli attori che fanno
parte del cast aggiungendo alla nostra scheda ​Film / Serie​ SOLO i primi 5 restituiti
dall’API con Nome e Cognome, e i generi associati al film con questo schema:“Genere 1, Genere 2, ...”
*/

const app = new Vue({
    el: "#root",
    data: {
        api_key: "29ba452e71ed0b0015f2c334d30767e2",
        list_film: "",
        list_tv: "",
        list_act_film: [],
        search_content: "",
        posterPath: "https://image.tmdb.org/t/p/original",
        notFoundFilm: false,
        notFoundTV: false,
        selectedTab: 0,
    },

    methods: {
        selectTab: function (x) {
            this.selectedTab = x
        },

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
                })
                .finally(() => {
                    for (let i = 0; i < this.list_film.length; i++) {
                        const film = this.list_film[i];
                        const urlAct = `https://api.themoviedb.org/3/movie/${film.id}/credits?api_key=${this.api_key}`;
                        axios
                            .get(urlAct)
                            .then(info => {
                                this.list_act_film.push(info.data)
                            });
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
                });


        });
    }
});