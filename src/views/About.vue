<template>
    <div class="textcontainer2" id="about">
        <p>
            An average techie who really enjoy learning new skills and is overcurious in almost every topic he stumbles
            upon.
            Quiet familiar in C, C++, Python, JS, Git/Concept of VCS, HTML, CSS, Bash & Batch Scripting.
            Some of my other skills include:
            - Knowledge of the Adobe Suite of products. (viz. Photoshop, Premiere Pro, Acrobat Pro & Indesign)
            - Know-how in creatively using open-source programs like Blender, Audacity, and OBS.

            Must know about me section:
            - A Windows, macOS, Linux (Debian & Arch) user
            - VSCode is the preferred primary editor
            - Very much interested in networking and am familiar with using type-2 hypervisors
            - WSL Fanboy, Used Arch the proper way :), a Gnome & Debian (Ubuntu) enthusiast
            - Aspiring game dev, a self-taught music composer, amateur photographer
        </p>
    </div>
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
  