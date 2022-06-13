<script>
import IconBell from "./icons/IconBell.vue"
import IconEllipses from "./icons/IconEllipses.vue"
import IconProfile from "./icons/IconProfile.vue"
import IconArrowBack from "./icons/IconArrowBack.vue"

import { sidebar } from "../store/sidebar"

export default {
    name: "Header",
    components: {
        IconBell,
        IconEllipses,
        IconProfile,
        IconArrowBack
    },
    computed: {
        displayBackIcon() {
            return this.$route.name && this.$route.name.match(/details/gi)
        }
    },
    data() {
        return {
            sidebar
        }
    }
}
</script>

<template>
    <header :style="{ justifyContent: displayBackIcon ? 'space-between' : 'end' }">
        <div 
            @click="this.$router.go(-1)" 
            v-show="displayBackIcon"
        >
            <IconArrowBack/>
            <p style="margin-left: .5rem">Back</p>
        </div>
        <div>
            <IconBell />
            <div class="divider"></div>
            <div class="profile">
                <div class="pics"><IconProfile/></div>
                <div>John Doe</div>
            </div>
            <IconEllipses />
            <div v-if="!sidebar.menu" class="hamburger" @click="sidebar.toggleSidebar()"> &#9776;</div>
            <div v-if="sidebar.menu" class="hamburger" @click="sidebar.toggleSidebar()">X</div>
        </div>
    </header>
</template>

<style>
header{
    width: 100%;
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 2px 6px rgba(229, 229, 229, 0.3);
}
header>div:first-child{
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
    color: #A4A7B7;
    cursor: pointer;
}
header>div:last-child{
    display: flex;
    align-items: center;
}
.profile{
    display: flex;
    align-items: center;
    margin-right: 3rem;
}
.pics{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 1rem;
}
.divider{
    height: 20px;
    width: 2px;
    margin: 0 1.4rem;
    background-color: #E5E5E5;
}
.hamburger{
    display: none;
}
@media screen and (max-width: 1000px) {
    header {
        padding: 1rem;
    }
}
@media screen and (max-width: 800px) {
    .hamburger{
        display: block;
        margin-left: 1rem;
        cursor: pointer;
        font-size: 1.2rem;
    }
}
</style>