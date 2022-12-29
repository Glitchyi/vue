<template>
  <div class="grid h-screen place-content-around">

    <div class="mt-20 pt-10 flex flex-col justify-start lg:mt-5 lg:justify-evenly lg:flex-row">
      <div class="cur mx-10 flex flex-col justify-start">
        <img id="profile" class="cur" src="../assets/profile.gif" alt="Profile Pic">
      </div>
      <div class="cur  mx-10 flex flex-col justify-start font-gsans">
        <p class="my-10 font-bold" id="name" >ADVAITH <br> NARAYANAN</p>
        <p class="font-bold" id="tagline">Student at MITS |<br> Computer Enthusiast |<br>頭いい</p>
      </div>

    </div>
    <navbar />
  </div>
</template>










<style src ="../css/index.css"/> 


<style src ="../css/smol.css"/> 


<script lang="ts">
import { defineComponent } from 'vue';
import navbar from "../components/navbar.vue"

export default defineComponent({
  name: 'HomeView',
  components: {
    navbar,
  },
});
</script>
