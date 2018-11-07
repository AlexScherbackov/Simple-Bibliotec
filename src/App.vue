<template>
  <div id="app">
    <div class="container">
      <keep-alive>
        <component :is='actualView'></component>
      </keep-alive>
    </div>
   
  </div>
</template>

<script>

import search from './components/searchForm.vue';
import list from './components/bookList.vue';
import bookServices from './store/bookServices.js';

export default {
  name: 'app',
  data () {
    return {
      actualView: 'search'
    }
  },
  created(){
    bookServices.$on("viewList", ()=>{
      this.actualView = 'list';
    })
  },
  components:{
    search,
    list
  }

}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
  margin-top: 60px;
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
</style>
