import { reactive } from "vue";

const url = `${import.meta.env.VITE_BASE_URL}/species`

export const species = reactive({
    data: [],
    loading: true,
    async getSpecies() {
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