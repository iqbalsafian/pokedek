<template>
    <table align="center">
        <thead>
            <tr>
                <td rowspan="2">Name</td>
                <td colspan="2">Type</td>
                <td rowspan="2">HP</td>
                <td colspan="2">Attack</td>
                <td colspan="2">Defense</td>
                <td rowspan="2">Speed</td>
                <td rowspan="2">Total</td>
                <td rowspan="2">Generation</td>
                <td rowspan="2">Legendary</td>
            </tr>
            <tr>
                <td class="colspan">1</td>
                <td class="colspan">2</td>
                <td class="colspan">Normal</td>
                <td class="colspan">Special</td>
                <td class="colspan">Normal</td>
                <td class="colspan">Special</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="pokemon in pokemons" :key="pokemon.No">
                <List :pokemon="pokemon" />
            </tr>
        </tbody>
    </table>
</template>

<script>
import List from './List';
export default {
    name: 'PokeList',
    props: {
        pokemons: Array
    },
    components: {
        List
    }
}
</script>

<style scoped>
    table {
        /* border: 1px solid black; */
        width: 95%;
    }
    thead {
        background-color:aquamarine;
    }
    thead > tr > td {
        border: 1px solid #ddd;
    }
    tr:nth-child(even){background-color: #f2f2f2;}
    .colspan {
        background-color:aquamarine;
    }
</style>