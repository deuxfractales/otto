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
  methods: {
    postLogin() {
      axios.post('localhost')
    }
  }
}
</script>

