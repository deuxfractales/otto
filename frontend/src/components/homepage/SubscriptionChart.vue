<template>
<h1>Choose The Plan That Suits Your Reposting Needs:</h1>
<div class="planHolder">
    <div class="plan">
      <h1>PLAN A</h1>
      <ul class="planList">
        <li><h2>Does This</h2></li>
        <li><h2>And This</h2></li>
        <li><h2>Also This</h2></li>
        <li><h2>Finally This</h2></li>
      </ul>
      <h1>9.99<span class="perMonth">/per month</span></h1>
    
    <button>Subscribe</button>
    </div>
    <div class="plan">
      <h1>PLAN B</h1>

      <ul class="planList">
        <li><h2>Does This</h2></li>
        <li><h2>And This</h2></li>
        <li><h2>Also This</h2></li>
        <li><h2>Finally This</h2></li>
      </ul>
      <h1>9.99<span class="perMonth">/per month</span></h1>

    <button>Subscribe</button>
    </div>
    <div class="plan"> 
      <h1>PLAN C</h1>

      <ul class="planList">
        <li><h2>Does This</h2></li>
        <li><h2>And This</h2></li>
        <li><h2>Also This</h2></li>
        <li><h2>Finally This</h2></li>
      </ul>
      <h1>9.99<span class="perMonth">/per month</span></h1>
    
    <button>Subscribe</button>
    </div>
</div>
</template>
<style scoped>
.perMonth{
  color: #ADADAD;
  font-size: 30%;
}
.planList{
  margin-left: 7%;
}
.plan{
  width: 30%;
  margin-left:1.5%;
  margin-right:1.5%;
  margin-top: 6%;
  border: 1px solid black;
  border-radius: 3px
}
.planHolder{
  display: flex;
  flex-direction: horizontal;
  
}
</style>
<script>
export default {
  name: "SuscriptionChart"
}
</script>

