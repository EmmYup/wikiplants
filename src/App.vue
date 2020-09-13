<template>
  <div id="app">
    <Header />
    <FilterBar />
    <List :pokemons="this.pokemons" />
  </div>
</template>

<script>
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import List from './components/List';
import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';
const IMAGE_API_URL = 'https://pokeres.bastionbot.org/images/pokemon';

axios.defaults.baseURL = API_URL;

export default {
  name: 'App',
  components: { Header, FilterBar, List },
  computed: {},
  data() {
    return {
      pokemons: [],
    };
  },
  async mounted() {
    axios.get(`/pokemon?limit=151`).then((response) => {
      response.data.results.forEach((element) => {
        axios.get(element.url).then((response) => {
          this.pokemons.push({
            id: response.data.id,
            name: response.data.name,
            types: response.data.types,
            imageUrl: `${IMAGE_API_URL}/${response.data.id}.png`,
          });
        });
      });
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  /* width: 100%; */
}
h1 {
}
</style>
