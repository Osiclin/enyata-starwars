<script>
export default {
  name: "App",
  data() {
    return {
      layout: 'div'
    }
  }
}
</script>

<template>
  <div>
    <component :is="layout">
      <router-view :layout.sync="layout" />
    </component>
  </div>
</template>

<style>
@import '@/assets/base.css';

#app {
  font-weight: normal;
  min-height: 100vh;
}
</style>
