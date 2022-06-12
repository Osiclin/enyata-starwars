<script>
import PageTitle from '../../components/PageTitle.vue';
import IconTableSelect from '../../components/icons/IconTableSelect.vue';

import { people } from '../../store/people.js'
import { convertDate } from "../../utils"

export default {
    name: "PeopleView",
    components: {
        PageTitle,
        IconTableSelect
    },
    data() {
        return {
            tableHead: ['Name', 'Birth Year', 'Gender', 'Hair Color', 'Height', 'Created'],
            people
        }
    },
    methods: {
        convertDate
    },
    created() {
        if (!people.data.results) people.getPeople()
    }
}
</script>

<template>
    <div class="container">
        <div>
            <PageTitle title="People" />
            <div class="tableContainer">
                <table>
                    <thead>
                        <tr>
                            <th><div><IconTableSelect/></div></th>
                            <th v-for="(item, i) in tableHead" :key="i">{{ item }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="people.loading"><td colspan="7" style="text-align: center;">Loading...</td></tr>
                        <tr 
                            v-else
                            v-for="(item, i) in people.data.results" 
                            :key="i" 
                            @click="this.$router.push({ name: 'peopleDetails', params: { id: i + 1 }})"
                        >
                            <td><IconTableSelect/></td>
                            <td>{{ item?.name }}</td>
                            <td>{{ item?.birth_year }}</td>
                            <td>{{ item?.gender }}</td>
                            <td>{{ item?.hair_color }}</td>
                            <td>{{ item?.height }}CM</td>
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