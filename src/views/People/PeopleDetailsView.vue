<script>
export default {
    name: "PeopleDetailsView",
    data() {
        return {
            data: {},
            loading: true
        }
    },
    methods: {
        async getPeople(id) {
            this.loading = true

            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/people/${id}`, {
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
        this.getPeople(this.$route.params.id)
    }
}
</script>

<template>
    <div class="container">
        <div v-if="loading">Loading...</div>
        <div v-else>
            <div class="imgDiv">
                <img src="/images/people.svg" width="318" height="450" :alt="data?.name" />
            </div>
            <div class="details">
                <h1>{{ data?.name }}</h1>
                <p>Gender: <span>{{ data?.gender }}</span></p>
                <p>Year of birth: <span>{{ data?.birth_year }}</span></p>
                <p>Skin Color: <span>{{ data?.skin_color }}</span></p>
                <p>Height: <span>{{ data?.height }}CM</span></p>
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
    text-transform: capitalize;
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