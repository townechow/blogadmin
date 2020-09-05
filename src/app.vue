<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import selfIco from './assets/xiao_feiji.ico';
export default {
  name: "App",
  methods: {
    init(){
      console.log("app 初始化...");
      document.querySelector("#self_icon").href = selfIco;
    }
  },
  mounted() {
    this.init();
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
