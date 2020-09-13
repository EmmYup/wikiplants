<template>
  <div id="app">
    <Header />
    <b-container fluid>
      <b-row>
        <b-col>
          <b-form-input
            v-model="text"
            placeholder="Enter the name of a pokemon"
          ></b-form-input>
        </b-col>
        <b-col>
          <b-dropdown id="dropdown-1" variant="primary" text="Filter family">
            <b-dropdown-item>Family 1</b-dropdown-item>
            <b-dropdown-item>Family 2</b-dropdown-item>
            <b-dropdown-item>Family 3</b-dropdown-item>
          </b-dropdown>
        </b-col>
      </b-row>
    </b-container>
    <List :pokemons="this.pokemons" />
  </div>
</template>

<script>
import Header from './components/Header';
import List from './components/List';
import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';
const IMAGE_API_URL = 'https://pokeres.bastionbot.org/images/pokemon';

axios.defaults.baseURL = API_URL;

export default {
  name: 'App',
  components: { Header, List },
  computed: {},
  data() {
    return {
      pokemons: [],
      text: '',
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
