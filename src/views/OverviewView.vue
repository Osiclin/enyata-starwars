<script>
import CardContainer from '../components/cards/CardContainer.vue';
import PageTitle from '../components/PageTitle.vue';
import Table from '../components/Table.vue';
import { overview } from '../store/overview.js'

export default {
    name: "OverviewView",
    components: {
        CardContainer,
        PageTitle,
        Table
    },
    data() {
        return {
            tableHead: ['Film Title', 'Release Date', 'Director', 'Producer', 'Episode ID', 'Character'],
            tableBody: ['MoonLight', '9/18/20', 'Esther Howard', 'Paracetamol', '4', 'https://swapi.dev/api/people']
        }
    },
    mouted() {
        console.log(overview.getOverview)
    }
}
</script>

<template>
    <div class="container">
        <div>
            <CardContainer/>
            <PageTitle title="Films" />
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