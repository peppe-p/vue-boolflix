const app = new Vue({
    el: "#root",
    data: {
        api_key: "29ba452e71ed0b0015f2c334d30767e2",
        list_film: "",
    },

    methods: {

    },

    mounted() {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=ritorno+al+futuro`;
        axios
            .get(url)
            .then(info => {
                console.log(info.data.results[1]);
            })
    }
});