<script>
export default {
    name: "Input",
    props: {
        label: String,
        type: String,
        name: String,
        modelValue: String,
        id: String
    }
}
</script>

<template>
    <div class="inputDiv">
        <label :for="label">{{ label }}</label>
        <input 
            :id="id"
            :type="type"
            :name="name"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<style scoped>
.inputDiv{
    margin-bottom: 2rem;
    position: relative;
}
.inputDiv>label{
    position: absolute;
    top: -10px;
    left: 10px;
    z-index: 1;
    background-color: var(--bg-color-white);
    padding: 0 .5rem;
    font-size: .75rem;
}
input{
    width: 100%;
    height: 48px;
    padding: 1rem;
    background-color: var(--bg-color);
    border: 1px solid var(--input-border);
    border-radius: 4px;
    outline: 0;
}
input:focus{
    border-color: var(--input-border-blue);
}
</style>