<template>
  <div class="home-page">
    <vue-header @change="onSelectedContentType" :content-name="content_name" />
    <vue-main :content-name="content_name" />
    <vue-footer />
  </div>
</template>
<script lang="ts">
export enum ContentName {
  BIO = "bio",
  PORTFOLIO = "portfolio",
}
</script>
<script lang="ts" setup>
import VueHeader from "@/components/Header/VueHeader.vue";
import VueMain from "@/components/Main/VueMain.vue";
import VueFooter from "@/components/Footer/VueFooter.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const hasQueryId = ref(false);

const content_name = ref<ContentName>(ContentName.BIO);

const onSelectedContentType = (contentName: ContentName) => {
  content_name.value = contentName;
};

if (route.query.work_id) {
  content_name.value = ContentName.PORTFOLIO;
}
</script>
<style lang="scss">
.home-page {
  height: 100vh;
}
</style>
