<script setup>
import { button } from "styles/button.css";
import {
  container,
  image,
  content,
  actions,
  title as titleStyle,
  description as descriptionStyle,
} from "styles/card.css";

defineProps({
  imageSrc: String,
  imageAlt: String,
  title: String,
  description: String,
});
</script>

<template>
  <div :class="container">
    <img :src="imageSrc" :alt="imageAlt" :class="image" />
    <div :class="content">
      <div :class="titleStyle">{{ title }}</div>
      <div :class="descriptionStyle">{{ description }}</div>
      <div :class="actions">
        <button :class="button">Order This Mouse Now!</button>
      </div>
    </div>
  </div>
</template>
