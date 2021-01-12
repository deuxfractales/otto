<template>
  <input v-model="username" placeholder="username" />
  <input v-model="password" placeholder="password" />
  <button @click="postLogin">Login</button>
</template>
<style>

</style>
<script>
import axios from 'axios'

export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async postLogin() {
      const user = {
        username: this.username,
        password: this.password
      }
      console.log(this.username)
      const response = await axios.post(`${process.env.VUE_APP_API}/auth/login`, user)
      console.log(response.data)
    }
  }
}
</script>

