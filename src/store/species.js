import { reactive } from "vue";

const url = `${import.meta.env.VITE_BASE_URL}/species`

export const species = reactive({
    data: [],
    async getSpecies() {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                'Content-type': "application/json"
            }
        })

        const data = await res.json()

        if(res.status === 200) this.data = data
    }
})