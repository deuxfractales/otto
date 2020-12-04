<template>
  <div class="heroHolder fadeIn">
    <div class="leftCol">
      <h1>Effortless Kijiji Ad Reposting</h1>
    </div>
    <div class="rightCol"> 
      <h2 class="formTitle">Sign Up For a Free Trial Today</h2>
        <input v-model="username" placeholder="username">
        <input v-model="password" placeholder="password">
        <input v-model="email" placeholder="email">
      <button @click="sendForm"> <h3>Register</h3></button> 
  </div>
  </div>
</template>

<style>
   .fadeIn {
	-webkit-animation: fade-in 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) 400ms both;
	        animation: fade-in 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) 400ms both;
  }
  ::placeholder{
    font-family: 'Epilogue', sans-serif;
    font-size: 20px 
  } 
  input{
    padding-left: 2%;
    width: 60%;
    background-color: #C1C1C3;
    outline: none;
    border:none;
    height: 10%;
    margin: 3%;
    border-radius: 8px;
  }
  .formTitle{
    font-weight: 300
  }
  .rightCol{
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom:5%;
    border-color: #e0e0e1;
    border-size: 3px;
    border-style: solid;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 10%;
    margin-bottom: 30%;
    border-radius: 8px;
  }
  .leftCol{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom:15%;
  }
  .heroHolder{
    display: grid;
    margin-left: 60px;
    margin-right: 60px;
    grid-template-columns: 50% 50%;
    grid-template-rows: 80vh;
   

  }
</style>
<script>

import axios from 'axios'

export default {
  name: 'Hero',
  data() {
    return {
      username: '',
      password: '',
      email: ''
    }
  },
  methods:{ 
    sendForm(){
      axios.post('http://localhost:8406/auth/newUser', {
        username: this.username,
        password: this.password,
        email: this.email
      })
    }
  }
}
</script>

