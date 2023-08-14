<script setup>
import { container as headerContainer } from "styles/header.css";
import { grid } from "./App.css";

import Card from "./components/Card.vue";
</script>

<template>
  <div>
    <div :class="headerContainer">
      <img
        src="./assets/vue.svg"
        alt="Vue logo"
        style="width: 25px; height: 25px"
      />
      <div>Vue on Vite</div>
    </div>
    <div :class="grid">
      <Card
        imageSrc="mouse-steampunk-3.png"
        imageAlt="Steampunk Super Mouse"
        title="Steampunk Super Mouse"
        description="What the heck is this thing? Is it even usable? You might get cut or something, but it's probably worth it to rock this amazing mouse."
      />
      <Card
        imageSrc="mouse-star-wars.png"
        imageAlt="Star Wars Mouse"
        title="Star Wars Mouse"
        description="We're gonna get sued by Lucasfilm, but it's worth it for this great looking mouse."
      />
    </div>
  </div>
</template>
