import { reactive } from "vue";

const url = `${import.meta.env.VITE_BASE_URL}/people`

export const people = reactive({
    data: [],
    loading: true,
    async getPeople() {
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