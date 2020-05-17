<template>
  <div>
  
  <div class="flex items-center justify-center pt-8">
      <img src="/images/logo.svg" class="w-72" alt="ArtCenter Hackathon">
    </div>

    <div class=" flex justify-center mt-8 ">
      <div>
        <a href="#speakers"  v-scroll-to="'#speakers'" class="font-bold text-black text-xl">Speakers</a>
        <a href="#schedule" v-scroll-to="'#schedule'" class="ml-10 font-bold text-black text-xl">Schedule</a>
        <a href="#brief" v-scroll-to="'#brief'" class="ml-10 font-bold text-black text-xl">Brief</a>
        <a href="#qa" v-scroll-to="'#qa'" class="ml-10 font-bold text-black text-xl">Q&A</a>
        </div>
    </div>


  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>
