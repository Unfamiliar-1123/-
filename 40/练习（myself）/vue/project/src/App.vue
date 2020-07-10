<template>
  <div id="app">
    <!-- <common-header></common-header> -->
    <router-link to="/home">首页</router-link> |
    <router-link to="/detail">详情页</router-link> |
    <router-link to="/test">测试页</router-link> |
    <!-- <router-view> -->
  </div>
</template>
// <script>
// import CommomHeader from'./components/CommonHeader';
//     export default {
//         components:{
//           CommomHeader
//         }
//     }
// </script>

<style lang="scss">
#app {
  font-family: Av enir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
