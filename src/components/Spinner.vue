<script>
export default {
    name: "Spinner"
}
</script>

<template>
    <div class="spinnerContainer">
        <div class="spinner"></div>
    </div>
</template>

<style>
.spinnerContainer{
    background-color: transparent;
}
.spinner{
    border: 2px solid #f3f3f3;
    background-color: transparent;
    border-radius: 50%;
    border-top: 2px solid #333333;
    border-right: 2px solid #333333;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 auto;
    animation: spin 2s linear infinite;
}

@keyframes spin{
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>