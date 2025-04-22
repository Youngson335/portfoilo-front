<template>
  <header class="vue-header">
    <vue-menu @change="onChange" :content-name="props.contentName" />
  </header>
</template>
<script lang="ts" setup>
import VueMenu from "../Menu/VueMenu.vue";
import { defineEmits, defineProps } from "vue";
import ComponentEvents from "@/emits";
import { ContentName } from "@/pages/HomePage.vue";

const props = defineProps<{
  contentName: ContentName;
}>();

const emits = defineEmits([ComponentEvents.CHANGE]);

const onChange = (contentName: "bio" | "portfolio") => {
  emits(ComponentEvents.CHANGE, contentName);
};
</script>
