<template>
  <div id="app" class="bg-gray-200 " >
    <div class="container mx-auto ">

      <MainNav/>
      <HeroSection/>
      <Brief/>
      <Speakers/> 
      <Timeline/>
      <FAQ/>  
      <FooterSection/> 

     </div>
   
  </div>
</template>

<script>
  
  import Speakers from './components/Speakers.vue'
  import MainNav from './components/MainNav.vue'
  import HeroSection from './components/HeroSection.vue'
  import FAQ from './components/FAQ.vue'
  import Timeline from './components/Timeline.vue'
    import Brief from './components/Brief.vue'
  
  import FooterSection from './components/FooterSection.vue'

export default {
  name: 'app',
  components: {
    MainNav,
    HeroSection,
    FooterSection,
    Speakers,
    Brief,
    FAQ,
    Timeline
  }
}
</script>

<style src="./assets/tailwind.css">