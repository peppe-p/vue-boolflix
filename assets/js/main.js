/* Milestone 1:
Creare un layout base con una searchbar(una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film.
Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato:
-Titolo
-Titolo Originale
-Lingua
-Voto
*/

const app = new Vue({
    el: "#root",
    data: {
        api_key: "29ba452e71ed0b0015f2c334d30767e2",
        list_film: "",
        search_content: "",
    },

    methods: {

    },

    mounted() {
        const searchBttn = document.getElementById("search");
        searchBttn.addEventListener("click", () => {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${this.search_content}&page=1`;
            axios
                .get(url)
                .then(info => {
                    this.list_film = info.data.results;
                })
        });
    }
});