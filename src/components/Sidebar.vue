<script>
import IconOverview from './icons/IconOverview.vue'
import IconPeople from './icons/IconPeople.vue'
import IconStarships from './icons/IconStarships.vue'
import IconSpecies from './icons/IconSpecies.vue'

import { sidebar } from '../store/sidebar'

export default {
    name: "Sidebar",
    components: {
        IconOverview,
        IconPeople,
        IconSpecies,
        IconStarships
    },
    data() {
        return {
            sidebar
        }
    }
}
</script>

<template>
    <aside>
        <div style="margin-bottom: 1.875rem;">
            <img src="@/assets/logo.svg" alt="logo" />
        </div>
        <nav>
            <router-link to="/overview">
                <div 
                    :style="{ 
                        marginBottom: '3.75rem', 
                        backgroundColor: this.$route.name && this.$route.name.match(/overview/gi) ? '#0A74DC' : '' 
                    }"
                >
                    <IconOverview />
                    <div>Overview</div>
                </div>
            </router-link>
            <router-link to="/starships">
                <div
                    :style="{ 
                        marginBottom: '1rem', 
                        backgroundColor: this.$route.name && this.$route.name.match(/starships/gi) ? '#0A74DC' : '' 
                    }"
                >
                    <IconStarships />
                    <div>Starships</div>
                </div>
            </router-link>
            <router-link to="/people">
                <div
                    :style="{ 
                        marginBottom: '1rem', 
                        backgroundColor: this.$route.name && this.$route.name.match(/people/gi) ? '#0A74DC' : '' 
                    }"
                >
                    <IconPeople />
                    <div>People</div>
                </div>
            </router-link>
            <router-link to="/species">
                <div
                    :style="{
                        backgroundColor: this.$route.name && this.$route.name.match(/species/gi) ? '#0A74DC' : '' 
                    }"
                >
                    <IconSpecies />
                    <div>Species</div>
                </div>
            </router-link>
        </nav>
    </aside>
    <aside class="mobile" :style="{ left: sidebar.menu ? '0' : '-272px' }">
        <div style="margin-bottom: 1.875rem;">
            <img src="@/assets/logo.svg" alt="logo" />
        </div>
        <nav>
            <router-link to="/overview">
                <div 
                    :style="{ 
                        marginBottom: '3.75rem', 
                        backgroundColor: this.$route.name && this.$route.name.match(/overview/gi) ? '#0A74DC' : '' 
                    }"
                >
                    <IconOverview />
                    <div>Overview</div>
                </div>
            </router-link>
            <router-link to="/starships">
                <div
                    :style="{ 
                        marginBottom: '1rem', 
                        backgroundColor: this.$route.name && this.$route.name.match(/starships/gi) ? '#0A74DC' : '' 
                    }"
                >
                    <IconStarships />
                    <div>Starships</div>
                </div>
            </router-link>
            <router-link to="/people">
                <div
                    :style="{ 
                        marginBottom: '1rem', 
                        backgroundColor: this.$route.name && this.$route.name.match(/people/gi) ? '#0A74DC' : '' 
                    }"
                >
                    <IconPeople />
                    <div>People</div>
                </div>
            </router-link>
            <router-link to="/species">
                <div
                    :style="{
                        backgroundColor: this.$route.name && this.$route.name.match(/species/gi) ? '#0A74DC' : '' 
                    }"
                >
                    <IconSpecies />
                    <div>Species</div>
                </div>
            </router-link>
        </nav>
    </aside>
</template>

<style>
aside{
    width: 272px;
    min-height: 100vh;
    padding: 2rem 1rem;
    background-color: var(--bg-color-blue);
    position: sticky;
    top: 0;
}
aside>div{
    display: flex;
    justify-content: center;
}
nav>a>div{
    padding: .5rem 2rem;
    color: var(--text-color-white);
    font-weight: 700;
    font-size: 1rem;
    line-height: 24px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
}
nav>a{
    text-decoration: none;
}
nav>a>div>div{
    margin-left: 1rem;
}
.mobile{
    display: none;
}

@media screen and (max-width: 800px) {
    aside{
        display: none;
    }
    .mobile{
        display: block;
        width: 272px;
        min-height: 100vh;
        padding: 2rem 1rem;
        background-color: var(--bg-color-blue);
        position: fixed;
        top: 0;
        left: -272px;
        z-index: 1;
        transition: 1s;
    }
}
</style>