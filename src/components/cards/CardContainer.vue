<script>
import Card from "./Card.vue"
import IconBell from "../icons/IconBell.vue"

export default {
    name: "CardContainer",
    components: {
    Card,
    IconBell
}
}
</script>

<template>
    <div class="cardContainer">
        <Card 
         title="Films"
         stats="20 more"
         count="200"
         icon="#A9FFE0"
        />
        <Card 
         title="Starships"
         stats="20 more"
         count="200"
         icon="#A9C1FF"
        />
        <Card 
         title="People"
         stats="20 more"
         count="200"
         icon="#FFA9EC"
        />
        <Card 
         title="Species"
         stats="20 more"
         count="200"
         icon="#FDFFA9"
        />
    </div>
</template>

<style>
.cardContainer{
    display: flex;
    flex-wrap: wrap;
    margin: -1rem 0 4.688rem -1rem;
}
</style>