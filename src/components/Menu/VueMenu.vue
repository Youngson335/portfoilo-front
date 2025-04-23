<template>
  <div class="vue-menu">
    <div class="container between">
      <div class="p-20">
        <vue-left-menu
          @click="onChange"
          :is-active="props.contentName === ContentName.BIO"
        />
      </div>
      <div class="flex-center p-20 w-50 component-logo">
        <vue-logo :logo="'black'" />
      </div>
      <div class="p-20">
        <vue-right-menu
          @click="onChange"
          :is-active="props.contentName === ContentName.PORTFOLIO"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import VueRightMenu from "./VueRightMenu.vue";
import VueLeftMenu from "./VueLeftMenu.vue";
import VueLogo from "../Logo/VueLogo.vue";
import ComponentEvents from "@/emits";
import { defineEmits, defineProps } from "vue";
import { ContentName } from "@/pages/HomePage.vue";

const props = defineProps<{
  contentName: ContentName;
}>();

const emits = defineEmits([ComponentEvents.CHANGE]);

const onChange = (contentName: ContentName) => {
  emits(ComponentEvents.CHANGE, contentName);
};
</script>
<style lang="scss">
.vue-menu {
  border-bottom: 1px solid var(--light-gray);
}
.component-logo {
  @media (max-width: 640px) {
    display: none;
  }
}
</style>
