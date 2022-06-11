<script>
export default {
    name: "Button",
    props: {
        name: String,
        width: String,
        onClick: Function,
        status: Boolean
    }
}
</script>

<template>
    <button 
        :style="{ 
            border: `1px solid #5a585b`,
            width: width
        }"
        @click="onClick"
        :disabled="status"
    >
        {{ name }}
    </button>
</template>

<style>
button{
    width: 335px;
    height: 48px;
    background: var(--button-color);
    color: var(--text-color-white);
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
}
</style>