<template>
    <button @toggle-legendary="$emit('toggle-legendary')">{{ text }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
    }
}
</script>