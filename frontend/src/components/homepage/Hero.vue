<template>
  <div class="heroHolder">
    <div class="leftCol">
      <h2>Add value proposition or cathy marketing phrase here</h2>
    </div>
    <div class="rightCol"> 
      <h2>Add Call to aciton here</h2>
    </div>
  </div>
</template>
<style>
  .leftCol{
    display: flex;
    justify-content: center;
    align-items: center
  }
  .heroHolder{
    display: grid;
    margin-left: 60px;
    margin-right: 60px;
    grid-template-columns: 50% 50%;
    grid-template-rows: 80vh;
    background-color: gray;

  }
</style>
<script>
export default {
  name: 'Hero'
}
</script>

