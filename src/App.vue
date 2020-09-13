<template>
  <div id="app">
    <Header />
    <FilterBar />
  </div>
</template>

<script>
import Header from './components/Header';
import FilterBar from './components/FilterBar';

export default {
  name: 'App',
  components: { Header, FilterBar },
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
