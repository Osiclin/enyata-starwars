import { reactive } from "vue";

export const sidebar = reactive({
    menu: false,
    toggleSidebar() {
        this.menu = !this.menu
    }
})