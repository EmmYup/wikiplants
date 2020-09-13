<template>
  <b-container fluid id="main">
    <b-row>
      <b-col
        cols="12"
        id="column"
        v-for="pokemon in pokemons"
        v-bind:key="pokemon.id"
      >
        <b-card :img-src="pokemon.imageUrl" :img-alt="pokemon.name" img-left>
          <b-card-text>
            <p>Name: {{ pokemon.name }}</p>
            {{ pokemon.imageUrl }}
            <ul v-for="({ type }, index) in pokemon.types" :key="index">
              <li>{{ type.name }}</li>
            </ul>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
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
