<template>
    <Button :text="legendaryOnly ? 'Legendary Only' : 'Show All'" @click="$emit('toggle-legendary')" />
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