<script>
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';

export default {
  name: "App",
  components: { Sidebar, Header }
}
</script>

<template>
  <div class="container">
    <div v-if="this.$route.name !== 'login'">
      <Sidebar/>
    </div>
    <div>
      <div v-if="this.$route.name !== 'login'">
        <Header/>
      </div>
      <div class="children">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
@import '@/assets/base.css';

#app {
  font-weight: normal;
  min-height: 100vh;
}
.container{
  display: flex;
}
.container>div:last-child{
  flex: 1;
}
</style>
