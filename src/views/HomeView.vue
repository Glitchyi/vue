<template>
  <div class="profilecontainer">
    <img id="profile" class="profile cur" src="../assets/profile.gif" alt="Profile Pic">
  </div>
  <!-- <div class="navcontainer">
        <div id="mode" class="modeswitch cur"><img class="moonlogo" src="../assets/DarkTheme.png"></div>
        <div class="blank cur"></div>
        <div class="nav cur"></div>
    </div> -->
  <navbar />
  <div class="textcontainer">
    <ul class="cur" id="name">ADVAITH <br> NARAYANAN</ul>
    <ul class="cur" id="tagline">Student at MITS |<br> Computer Enthusiast |<br>頭いい</ul>
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
