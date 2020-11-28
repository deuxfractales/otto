<template>   
  <div class="nav">
    <div class="logo">
      <h2>OTTO</h2>  
    </div >
    <div class="buttonHolder">
      <router-link class="link" to="/"><h2>Home</h2></router-link> 
      <router-link class="link" to="/about"><h2>About</h2></router-link>
    </div>
    <div class="signInHolder">
      <router-link to="/signin"><h2>Sign In</h2> </router-link>
    </div>
  </div>
</template>
<style>
@media (max-width: 575.98px) {}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {}

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {}
  .logo{
    display: flex;
    align-items: center;
    margin-left: 30px; 
  }
  .signInHolder{
    display: flex;
    flex-direction: row-reverse;
    margin-right: 30px;
  }
  button{
    padding: 0px 20px ;
    border: none;
    background-color:#97979b;
    border-radius: 8px
  }
  button:hover {
    color: #ff0000;
    background-color: white
  }
  .nav {
    display: grid;
    align-content: center;   
    height: 20vh;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 50px;
    margin-left: 60px;
    margin-right: 60px
  }
  .buttonHolder{
    grid-column: span 1;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 0px  120px;
    border-style: solid;
    border-width: 3%;
    border-color: #97979b;
    border-radius: 8px;
  }
  .link, .link:visited{
    text-decoration: none;
    color: #323234
  }
  .link:active, .link.router-link-active {
    text-decoration:none;
    color: #ff0000
  }
  .link:hover{
    color: #ff4d4d;
  }
// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {
  .nav {
    display: grid;
    width: 100%;
    height: 10%;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 50px
  } 
}
</style>
<script>
export default {
  name: 'Nav'
}
</script>

