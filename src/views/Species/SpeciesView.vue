<script>
import PageTitle from '../../components/PageTitle.vue';
import IconTableSelect from '../../components/icons/IconTableSelect.vue';

import { species } from '../../store/species.js'
import { convertDate } from "../../utils"

export default {
    name: "SpeciesView",
    components: {
        PageTitle,
        IconTableSelect
    },
    data() {
        return {
            tableHead: ['Name', 'Classification', 'Eye colors', 'Hair color', 'Height', 'Created'],
            species
        }
    },
    methods: {
        convertDate
    },
    created() {
        species.getSpecies()
    }
}
</script>

<template>
    <div class="container">
        <div>
            <PageTitle title="Species" />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th><div><IconTableSelect/></div></th>
                            <th v-for="(item, i) in tableHead" :key="i">{{ item }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="species.loading"><td colspan="7" style="text-align: center;">Loading...</td></tr>
                        <tr 
                            v-else
                            v-for="(item, i) in species.data.results" 
                            :key="item.id"
                            @click="this.$router.push({ name: 'speciesDetails', params: { id: i + 1 }})"
                        >
                            <td><IconTableSelect/></td>
                            <td>{{ item?.name }}</td>
                            <td>{{ item?.classification }}</td>
                            <td>{{ item?.eye_colors }}</td>
                            <td>{{ item?.hair_colors }}</td>
                            <td>{{ item?.average_height }}CM</td>
                            <td>{{ convertDate(item?.created) }}</td>
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