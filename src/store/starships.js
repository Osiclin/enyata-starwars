import { reactive } from "vue";

const url = `${import.meta.env.VITE_BASE_URL}/starships`

export const starships = reactive({
    data: '',
    loading: true,
    async getStarships() {
        this.loading = true

        const res = await fetch(url, {
            method: "GET",
            headers: {
                'Content-type': "application/json"
            }
        })

        const data = await res.json()

        if(res.status === 200) this.data = data

        this.loading = false
    }
})