<template>
    <navbar />
</template>
  

<script lang="ts">
import { defineComponent } from 'vue';
import navbar from "../components/navbar.vue"

export default defineComponent({
    name: 'About',
    components: {
        navbar,
    },
});
</script>
  