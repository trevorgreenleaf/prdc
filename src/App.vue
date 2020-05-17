<template>
  <div id="app" class="container mx-auto">
    <MainNav/>
    <HeroSection/>
    <Speakers/> 
    <Timeline/>
    <Events/> 
    <FAQ/>  
    <FooterSection/>  
   
  </div>
</template>

<script>
  
  import Speakers from './components/Speakers.vue'
  import MainNav from './components/MainNav.vue'
  import HeroSection from './components/HeroSection.vue'
  import Events from './components/Events.vue'
  import FAQ from './components/FAQ.vue'
  import Timeline from './components/Timeline.vue'
  
  import FooterSection from './components/FooterSection.vue'

export default {
  name: 'app',
  components: {
    MainNav,
    HeroSection,
    FooterSection,
    Events,
    Speakers,
    FAQ,
    Timeline
  }
}
</script>

<style src="./assets/tailwind.css">