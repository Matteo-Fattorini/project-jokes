const app = new Vue({
  el: ".container",
  data: {
    apiUrl: "https://icanhazdadjoke.com/",
    joke: "",
  },
  methods: {
    async getJoke() {
      let res = await axios
        .get("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json",
          },
        })
      
      this.joke = res.data.joke
    }
    },
  
    mounted() {
        this.getJoke();
    }
  
});
