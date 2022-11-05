<template>
    <div class="navcontainer">
        <div id="mode" class="modeswitch cur"><img class="moonlogo" src="../assets/DarkTheme.png"></div>
        <div class="blank cur"></div>
        <div class="nav cur navtext" >
            <router-link to="/" class="navtext">Home</router-link>|
            <router-link to="/about" class="navtext">About</router-link>
        </div>
    </div>
</template>
<script lang="ts">
export default {};
</script>
