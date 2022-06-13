<script>
export default {
    name: "OverviewDetailsView",
    data() {
        return {
            data: {},
            loading: true
        }
    },
    methods: {
        async getFilm(id) {
            this.loading = true

            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/films/${id}`, {
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
        this.getFilm(this.$route.params.id)
    }
}
</script>

<template>
    <div class="container">
        <div v-if="loading">Loading...</div>
        <div v-else>
            <div class="imgDiv">
                <img src="/images/film.svg" width="318" height="450" :alt="data?.title" />
            </div>
            <div class="details">
                <h1>{{ data?.title }}</h1>
                <p>Director: <span>{{ data?.director }}</span></p>
                <p>Producer: <span>{{ data?.producer }}</span></p>
                <p>Release Date: <span>{{ data?.release_date }}</span></p>
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
    margin-bottom: 1rem;
}
.details>p{
    font-weight: 500;
    font-size: 1rem;
    line-height: 24px;
}
@media screen and (max-width: 1000px) {
    .container{
        padding: 3rem 1rem;
    }
    .container>div{
        flex-direction: column;
    }
    .details>h1{
        font-size: 2.5rem;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .imgDiv{
        margin-right: 0;
    }
}

</style>