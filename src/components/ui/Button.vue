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

<style scoped>
    button {
        border: 2px solid dodgerblue;
        background-color: white;
        color:dodgerblue;
        border-color: #2196F3;
        padding: 14px 28px;
        font-size: 16px;
        cursor: pointer;
    }
</style>