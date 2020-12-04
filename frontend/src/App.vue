<template>
  <Nav/>
  <router-view/>
</template>

<script>
import Nav from '@/components/global/Nav.vue'
  export default {
    components: {
      Nav
    } 
  } 
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0
}

@import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


h1{
  font-family: 'Epilogue', sans-serif;
  font-size: 80px
}

h2{
  font-family: 'Epilogue', sans-serif;
  font-size: 40px;
  font-weight: 600
}

h3{
  font-family: 'Epilogue', sans-serif;
  font-size: 30px;
  font-weight: 300
}

</style>
