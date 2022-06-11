<script>
import IconBell from "./icons/IconBell.vue"
import IconEllipses from "./icons/IconEllipses.vue"
import IconProfile from "./icons/IconProfile.vue"

export default {
    name: "Header",
    components: {
    IconBell,
    IconEllipses,
    IconProfile
}
}
</script>

<template>
    <header>
        <div></div>
        <div>
            <IconBell />
            <div class="divider"></div>
            <div class="profile">
                <div class="pics"><IconProfile/></div>
                <div>John Doe</div>
            </div>
            <IconEllipses />
        </div>
    </header>
</template>

<style>
header{
    padding: 1rem;
    display: flex;
    justify-content: end;
    box-shadow: 0px 2px 6px rgba(229, 229, 229, 0.3);
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
</style>