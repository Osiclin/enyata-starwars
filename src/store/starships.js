import { reactive } from "vue";

export const starships = reactive({
    async getStarships() {
        const res = await fetch('https://google.com', {
            method: "GET",
            headers: {
                'Content-type': "application/json"
            }
        })

        const data = await res.json()
        console.log(data)
    }
})