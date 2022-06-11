<script>
import IconTableSelect from './icons/IconTableSelect.vue';
export default {
    name: "Table",
    props: {
        tableHead: Array,
        tableBody: Array
    },
    components: { IconTableSelect }
}
</script>

<template>
    <div>
        <table>
            <thead>
                <th><IconTableSelect/></th>
                <th v-for="(item, i) in tableHead" :key="i">{{ item }}</th>
            </thead>
            <tbody>
                <td><IconTableSelect/></td>
                <td v-for="item in tableBody" :key="item.id">{{ item }}</td>
            </tbody>
        </table>
    </div>
</template>

<style>
table{
    table-layout: auto;
    width: 100%;
}
th, td{
    text-align: left;
    padding: 1rem 0;
}
th{
    color: #A4A7B7;
}
</style>