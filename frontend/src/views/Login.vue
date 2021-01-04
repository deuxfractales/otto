<template>
  
  <div v-if="butVal">
    <LoginForm />
    <button @click="swapForm">Not Registered? Click Here to Register</button>
  </div>
  <div v-else>
    <RegisterForm />
    <button @click="swapForm">Login</button>
  </div>
</template>




<style>

</style>
<script>

import LoginForm from '../components/login/LoginForm.vue'
import RegisterForm from '../components/login/RegisterForm.vue'

export default {
  name:'Login',
  components: {LoginForm, RegisterForm},
  data() {
    return {
      // Truthy value changes form to registration
      butVal: true
    }
  },
  methods: {
    swapForm(event) {
      console.log(this.butVal)
      this.butVal = !this.butVal
    }
  }
}
</script>

