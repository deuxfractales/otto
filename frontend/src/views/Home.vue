<template>
  <Hero />
  <Hero2 />
  <About />
</template>
<script>
// @ is an alias to /src
import Hero from '@/components/homepage/Hero.vue'
import Hero2 from '@/components/homepage/SubscriptionChart.vue'
import About from '@/components/homepage/AboutSection.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Hero2,
    About
  }
}
</script>
