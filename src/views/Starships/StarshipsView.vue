<script>
import PageTitle from '../../components/PageTitle.vue';
import IconTableSelect from '../../components/icons/IconTableSelect.vue';

import { starships } from '../../store/starships.js';

export default {
    name: "StarshipsView",
    components: {
    PageTitle,
    IconTableSelect
},
    data() {
        return {
            tableHead: ['Name', 'Model', 'Class', 'Passenger', 'Length', 'Character'],
            starships
        }
    },
    created() {
        if (!starships.data.results) starships.getStarships()
    }
}
</script>

<template>
    <div class="container">
        <div>
            <PageTitle title="Starships" />
            <div class="tableContainer">
                <table>
                    <thead>
                        <tr>
                            <th><div><IconTableSelect/></div></th>
                            <th v-for="(item, i) in tableHead" :key="i">{{ item }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="starships.loading"><td colspan="7" style="text-align: center;">Loading...</td></tr>
                        <tr 
                            v-else
                            v-for="(item, i) in starships.data.results" 
                            :key="i"
                            @click="this.$router.push({ name: 'starshipsDetails', params: { id: i }})"
                        >
                            <td><IconTableSelect/></td>
                            <td>{{ item?.name }}</td>
                            <td>{{ item?.model }}</td>
                            <td>{{ item?.starship_class }}</td>
                            <td>{{ item?.passengers }}</td>
                            <td>{{ item?.length }} Metres</td>
                            <td>{{ item?.films[0] }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    padding: 3rem;
}
</style>