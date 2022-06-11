<script>
import Sidebar from "../Sidebar.vue"

export default {
    name: "AppLayout",
    components: {
        Sidebar
    }
}
</script>

<template>
    <div class="container">
        <Sidebar />
        <div>
            
            <slot/>
        </div>
    </div>
</template>

<style scoped>
.container{
    display: none;
}
</style>