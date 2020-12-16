const app = new Vue({
  el: ".container",
  data: {
    apiUrl: "https://icanhazdadjoke.com/",
    joke: "",
  },
  methods: {
    getJoke() {
      axios
        .get("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json",
          },
        })
        .then((result) => {
          this.joke = (result.data.joke);
        });
    },
    },
  
    mounted() {
        this.getJoke();
    }
  
});
