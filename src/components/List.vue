<template>
    <td class="align-left">{{ pokemon.Name }}</td>
    <td>{{ pokemon.Type1 }} </td>
    <td>{{ pokemon.Type2 }} </td>
    <td class="align-right">{{ pokemon.HP }} </td>
    <td class="align-right">{{ pokemon.Attack }} </td>
    <td class="align-right">{{ pokemon.SpAtk }} </td>
    <td class="align-right">{{ pokemon.Defense }} </td>
    <td class="align-right">{{ pokemon.SpDef }} </td>
    <td class="align-right">{{ pokemon.Speed }} </td>
    <td class="align-right">{{ pokemon.Total }} </td>
    <td>{{ pokemon.Generation }} </td>
    <td>{{ pokemon.Legendary }} </td>
</template>

<script>
export default {
    name: 'List',
    props: {
        pokemon: Object
    }
}
</script>

<style scoped>
    .align-left {
        text-align: left;
        padding-left: 10px;
    }
    .align-right {
        text-align: right;
        padding-right: 10px;
    }
</style>