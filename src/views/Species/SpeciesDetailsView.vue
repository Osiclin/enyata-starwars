<script>
export default {
    name: "SpeciesDetailsView",
    data() {
        return {
            data: {},
            loading: true
        }
    },
    methods: {
        async getSpecie(id) {
            this.loading = true

            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/species/${id}`, {
                method: "GET",
                headers: {
                    'Content-type': "application/json"
                }
            })

            const data = await res.json()

            if(res.status === 200) this.data = data

            this.loading = false
        }
    },
    created() {
        this.getSpecie(this.$route.params.id)
    }
}
</script>

<template>
    <div class="container">
        <div v-if="loading">Loading...</div>
        <div v-else>
            <div class="imgDiv">
                <img src="/public/images/species.svg" width="318" height="450" :alt="data?.name" />
            </div>
            <div class="details">
                <h1>{{ data?.name }}</h1>
                <p>Designation: <span>{{ data?.designation }}</span></p>
                <p>Language: <span>{{ data?.language }}</span></p>
                <p>Eye Colors: <span>{{ data?.eye_colors }}</span></p>
                <p>Average Lifespan: <span>{{ data?.average_lifespan }}CM</span></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    padding: 3rem;
}
.container>div{
    display: flex;
}
.imgDiv{
    margin-right: 1rem;
}
.details{
    padding: 3rem 0 0;
}
.details>h1{
    font-weight: 700;
    font-size: 3rem;
    line-height: 3rem;
    color: #000000;
    margin-bottom: 1.75rem;
}
.details>p{
    font-weight: 500;
    font-size: 1rem;
    line-height: 24px;
    text-transform: capitalize;
}
</style>