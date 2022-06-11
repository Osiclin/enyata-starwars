<script>
export default {
    name: "Title",
    props: ['title']
}
</script>

<template>
    <div class="titleDiv">
        <h1>{{ title }}</h1>
    </div>
</template>

<style>
.titleDiv{
    margin-bottom: 1.938rem;
}
.titleDiv>h1{
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #A4A7B7;
}
</style>