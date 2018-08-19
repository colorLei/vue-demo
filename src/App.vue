<template>
  <div id="app">
    <Header/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/header.vue';
export default {
  name: 'App',
  components: {
    Header
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.content{
  padding: 20px 80px;
}
</style>
