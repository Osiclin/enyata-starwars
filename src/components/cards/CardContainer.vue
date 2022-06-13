<script>
import Card from "./Card.vue"

import { films } from "../../store/films"
import { starships } from "../../store/starships"
import { people } from "../../store/people"
import { species } from "../../store/species"

export default {
    name: "CardContainer",
    components: {
        Card
    },
    data() {
        return {
            films,
            starships,
            people,
            species
        }
    }
}
</script>

<template>
    <div class="cardContainer">
        <Card 
         title="Films"
         stats="20 more than yesterday"
         :count="films.data.count"
         :loading="films.loading"
         icon="#A9FFE0"
        />
        <Card 
         title="Starships"
         stats="20 more than yesterday"
         :count="starships.data.count"
         :loading="starships.loading"
         icon="#A9C1FF"
        />
        <Card 
         title="People"
         stats="20 more than yesterday"
         :count="people.data.count"
         :loading="people.loading"
         icon="#FFA9EC"
        />
        <Card 
         title="Species"
         stats="20 more than yesterday"
         :count="species.data.count"
         :loading="species.loading"
         icon="#FDFFA9"
        />
    </div>
</template>

<style>
/* .cardContainer{
    display: flex;
    flex-wrap: wrap;
    margin: -1rem 0 4.688rem -.8rem;
} */
.cardContainer{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    padding: 1rem .2rem;
    flex-wrap: wrap;
    margin: 0 0 4.688rem;
}
@media screen and (max-width: 1120px) {
    .cardContainer{
        display: grid;
        grid-template-columns: 1fr 1fr;
        flex-wrap: wrap;
    }
}
@media screen and (max-width: 350px) {
    .cardContainer{
        display: grid;
        grid-template-columns: 1fr;
        flex-wrap: wrap;
    }
}
</style>