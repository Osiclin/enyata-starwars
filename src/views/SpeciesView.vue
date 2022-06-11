<script>
import PageTitle from '../components/PageTitle.vue';
import IconTableSelect from '../components/icons/IconTableSelect.vue';

import { species } from '../store/species.js'

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
                        <tr v-for="item in species.data.results" :key="item.id">
                            <td><IconTableSelect/></td>
                            <td>{{ item?.name }}</td>
                            <td>{{ item?.classification }}</td>
                            <td>{{ item?.eye_colors }}</td>
                            <td>{{ item?.hair_colors }}</td>
                            <td>{{ item?.average_height }}</td>
                            <td>{{ item?.created }}</td>
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