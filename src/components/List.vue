<template>
  <b-container fluid id="main">
    <b-row v-if="pokemons.length > 0">
      <b-col
        cols="12"
        id="column"
        v-for="pokemon in pokemons"
        v-bind:key="pokemon.id"
      >
        <b-card
          :img-src="pokemon.imageUrl"
          :img-alt="pokemon.name"
          img-left
          img-height="200"
          img-width="200"
        >
          <b-card-text>
            <p>ID: {{ pokemon.id }}</p>
            <p>Name: {{ pokemon.name }}</p>
            <p>Types:</p>
            <ul v-for="({ type }, index) in pokemon.types" :key="index">
              <li>{{ type.name }}</li>
            </ul>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <h4 v-else>NO POKEMON FOUND:(</h4>
  </b-container>
</template>

<script>
export default {
  name: 'List',

  props: {
    pokemons: Array,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
#main {
  margin-top: 20px;
}
#column {
  margin-top: 10px;
}
</style>
