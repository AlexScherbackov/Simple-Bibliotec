<template>
  <div id="app">
    
    <router-view></router-view>
      
  </div>
</template>

<script>

import bookServices from './store/bookServices.js';

export default {
  name: 'app',
  data () {
    return {
      /*actualView: 'search'*/
    }
  },
  created(){
    bookServices.$on("viewList", ()=>{
      this.$router.push({name: 'bookList'})
    })
  }

}
</script>

<style lang="scss">

body{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.el-form-item__label{
    font-size: 24px;
    line-height: 32px;
    padding-bottom: 5px !important;
  }

.bg-blue{
  background-color: #409eff;
  &:hover{
    opacity: 0.8;
  }
} 


.back-link{
  width: 200px;
  height: 50px;
  display: inline-block;
  top: 10%;
  left: 80%;
  line-height: 50px;
  color: white;
  text-decoration: none;
  margin-bottom: 10px;
}
</style>
