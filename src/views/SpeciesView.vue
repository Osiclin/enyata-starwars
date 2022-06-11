<script>
import PageTitle from '../components/PageTitle.vue';
import Table from '../components/Table.vue';
import { species } from '../store/species.js'

export default {
    name: "SpeciesView",
    components: {
        PageTitle,
        Table
    },
    data() {
        return {
            tableHead: ['Name', 'Classification', 'Eye colors', 'Hair color', 'Height', 'Created'],
            tableBody: ['MoonLight', '9/18/20', 'Esther Howard', 'Paracetamol', '4', 'https://swapi.dev/api/people']
        }
    },
    mouted() {
    }
}
</script>

<template>
    <div class="container">
        <div>
            <PageTitle title="Species" />
            <Table
                :tableHead="tableHead"
                :tableBody="tableBody"
            />
        </div>
    </div>
</template>

<style scoped>
.container{
    padding: 3rem;
}
</style>