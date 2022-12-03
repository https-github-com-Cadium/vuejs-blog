<template>
  <div class="container">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  
}
</script>

<style lang="scss">
 
 @font-face {
  font-family: "SF Pro Text";
  src: local("SF Pro Text"), url(./assets/fonts/SFProText-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "SF Pro Display";
  src: url(./assets/fonts/SFPRODISPLAYBOLD.OTF) format("opentype");
}

body{
  font-family: 'SF Pro Text', sans-serif;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
.screen-height{
  min-height: 80vh;
}
</style>
