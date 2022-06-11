<script>
import IconOverview from './icons/IconOverview.vue'
import IconPeople from './icons/IconPeople.vue'
import IconStarships from './icons/IconStarships.vue'
import IconSpecies from './icons/IconSpecies.vue'

export default {
    name: "Sidebar",
    components: {
        IconOverview,
        IconPeople,
        IconSpecies,
        IconStarships
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
                <div style="margin-bottom: 3.75rem;">
                    <IconOverview />
                    <div>Overview</div>
                </div>
            </router-link>
            <router-link to="/starships">
                <div style="margin-bottom: 1rem;">
                    <IconStarships />
                    <div>Starships</div>
                </div>
            </router-link>
            <router-link to="/people">
                <div style="margin-bottom: 1rem;">
                    <IconPeople />
                    <div>People</div>
                </div>
            </router-link>
            <router-link to="/species">
                <div>
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
    background-color: var(--button-color);
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
</style>