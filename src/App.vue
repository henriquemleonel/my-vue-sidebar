<template>
  <div id="app">
    <my-vue-sidebar></my-vue-sidebar>
  </div>
</template>

<script>
import MyVueSidebar from './components/my-vue-sidebar.vue'

export default {
  name: 'App',
  components: {
    MyVueSidebar,
  }
}
</script>

<style lang="scss" module>

html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 1px solid red;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
}

</style>
