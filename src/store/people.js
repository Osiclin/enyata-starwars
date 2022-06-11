import { reactive } from "vue";

const url = `${import.meta.env.VITE_BASE_URL}/people`

export const people = reactive({
    data: [],
    async getPeople() {
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