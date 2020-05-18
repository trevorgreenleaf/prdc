<template>
  <div>
    <div class="mx-auto px-4 text-center">
        <img class="md:-mt-12 pointer-events-none max-w-screen-md w-full mx-auto" src="/images/hero-bg.png" alt="Image of students working">
        <p class="font-bold text-orange text-2xl md:-mt-24">May 23-30, 2020 </p>
        <h1 class=" text-4xl sm:text-5xl md:text-6xl tracking-tight font-bold text-black leading-none ">
          Pandemic Response <br> <span class="text-black">Design Challenge</span>
        </h1>
        <p class="mb-8 pt-4 text-orange">Registration closes at noon on 5/21/20, Sign up now!</p>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          We hope everyone had a safe and relaxing break. If you are ready to take on the challenge, ArtCenter’s "Hack"athon Club has put together a design challenge to address current and future disruptions. 
        </p>
        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center ">
          <div>
            <a href="#brief" v-scroll-to="'#brief'" class="w-full flex items-center justify-center px-8 py-3 text-base leading-6 font-bold rounded-full text-white bg-orange hover:bg-orange  md:py-4 md:text-lg md:px-10">
              Learn More
            </a>
          </div>
        </div>
    </div>

    <div class="bg-black">
      
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
