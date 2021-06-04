<template>
  <Header :legendaryOnly="legendaryOnly" @toggle-legendary="toggleLegendary" />
  <Pokemon :pokemons="pokemons" />
</template>

<script>
import Pokemon from './components/Pokemon';
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Pokemon,
    Header
  },
  data() {
    return {
      pokemons: [],
      legendaryOnly: false
    }
  },
  methods: {
    toggleLegendary() {
      this.legendaryOnly = !this.legendaryOnly;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
