import { reactive } from "vue";

export const people = reactive({
    async getPeople() {
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