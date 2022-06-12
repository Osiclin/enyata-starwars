<script>
import Spinner from '../Spinner.vue';
export default {
    name: "Card",
    props: ["title", "count", "stats", "icon", "loading"],
    components: { Spinner }
}
</script>

<template>
    <div class="card">
        <div>
            <div class="title">{{ title }}</div>
            <div class="icon" :style="{backgroundColor: icon}"></div>
        </div>
        <div>
            <div v-if="loading"><Spinner/></div>
            <div v-else class="count">{{ count }}</div>
            <p class="stats">{{ stats }}</p>
        </div>
    </div>
</template>

<style scoped>
.card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 208px;
    flex-shrink: 0;
    height: 130px;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}
.card>div:first-child{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.title, .count{
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 24px;
}
.stats{
    font-style: normal;
    font-weight: 400;
    font-size: .563rem;
    line-height: 24px;
    color: #00992B;
}
.icon{
    width: 26px;
    height: 26px;
    border-radius: 5px;
}
</style>