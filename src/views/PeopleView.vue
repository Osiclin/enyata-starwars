<script>
import PageTitle from '../components/PageTitle.vue';
import Table from '../components/Table.vue';
import { people } from '../store/people.js'

export default {
    name: "PeopleView",
    components: {
        PageTitle,
        Table
    },
    data() {
        return {
            tableHead: ['Name', 'Birth Year', 'Gender', 'Hair Color', 'Height', 'Created'],
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
            <PageTitle title="People" />
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