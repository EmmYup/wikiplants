<template>
  <div id="app">
    <Header />
    <b-container fluid>
      <b-row>
        <b-col>
          <b-form-input
            v-model="text"
            :change="findByName(this.text)"
            placeholder="Enter the name of a pokemon"
          ></b-form-input>
        </b-col>
        <b-col>
          <b-dropdown id="dropdown-1" variant="primary" text="Types">
            <b-dropdown-item
              v-on:click="filterPokemons(type.url)"
              v-for="(type, index) in this.types"
              :key="index"
              >{{ type.name }}</b-dropdown-item
            >
          </b-dropdown>
        </b-col>
      </b-row>
    </b-container>
    <div v-if="this.isLoading" class="text-center" id="spinner">
      <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
    </div>
    <List :pokemons="this.pokemons" v-if="!this.isLoading" />
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
      types: [],
      text: '',
      isLoading: false,
    };
  },
  async mounted() {
    axios.get(`/pokemon?limit=20`).then((response) => {
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

    axios.get(`/type`).then((response) => {
      this.types = response.data.results;
    });
  },
  methods: {
    filterPokemons: function(url) {
      this.isLoading = true;
      axios.get(url).then((response) => {
        this.pokemons = [];
        response.data.pokemon.forEach((response) => {
          axios.get(response.pokemon.url).then((response) => {
            this.pokemons.push({
              id: response.data.id,
              name: response.data.name,
              types: response.data.types,
              imageUrl: `${IMAGE_API_URL}/${response.data.id}.png`,
            });
          });
        });
      });
      this.isLoading = false;
    },
    findByName(name) {
      console.log(name);
    },
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
#spinner {
  margin-top: 40px;
}
</style>
