<template>
  <h1>Pokedek - {{ legendaryOnly ? 'Showing all legendary pokemon' : 'Showing all pokemon' }}</h1>
  <Header :legendaryOnly="legendaryOnly" @toggle-legendary="toggleLegendary" />
  <Pokemon :pokemons="legendaryOnly ? legendaryOnlyPokemons : pokemons" />
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
    },
    async getPokemon() {
      const res = await fetch('http://localhost:8882');
      const result = await res.json();
      this.pokemons = result.data.sort();
    }
  },
  computed: {
    legendaryOnlyPokemons: function() {
      return this.pokemons.filter(pokemon => pokemon.Legendary === "True").sort();
    }
  },
  created() {
    this.getPokemon();
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
