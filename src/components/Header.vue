<template>
    <Button :text="legendaryOnly ? 'Show All' : 'Show Legendary Only'" @click="$emit('toggle-legendary')" />
    <div id="header"></div>
</template>

<script>
import Button from './ui/Button';

export default {
    name: 'Header',
    props: {
        legendaryOnly: Boolean,
        toggleLegendary: Function
    },
    components: {
        Button
    }
}
</script>

<style scoped>
    #header {
        margin-bottom: 20px;
    }
</style>