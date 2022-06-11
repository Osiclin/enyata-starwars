<script>
import PageTitle from '../components/PageTitle.vue';
import IconTableSelect from '../components/icons/IconTableSelect.vue';

import { people } from '../store/people.js'

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
    created() {
        people.getPeople()
    }
}
</script>

<template>
    <div class="container">
        <div>
            <PageTitle title="People" />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th><div><IconTableSelect/></div></th>
                            <th v-for="(item, i) in tableHead" :key="i">{{ item }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in people.data.results" :key="item.id">
                            <td><IconTableSelect/></td>
                            <td>{{ item?.name }}</td>
                            <td>{{ item?.birth_year }}</td>
                            <td>{{ item?.gender }}</td>
                            <td>{{ item?.hair_color }}</td>
                            <td>{{ item?.height }}</td>
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