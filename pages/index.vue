<template>
  <div class="flex flex-col">
    <home-hero :heroContent="heroContent"/>
    <home-features :features="features" />
    <home-steps :homeStepsHeader="homeStepsHeader" :homeSteps="homeSteps"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "navigation-footer",
  async asyncData({ $content }) {
    const features = await $content("home-features").sortBy("feature_order", "asc").fetch();
    const heroContent = await $content("home-hero/professional-site-audit-management").fetch();
    const homeStepsHeader = await $content("home-steps/header/Home Steps Header").fetch();
    const homeSteps = await $content("home-steps").sortBy("feature_order", "asc").fetch();
    return {
      features,
      heroContent,
      homeStepsHeader,
      homeSteps
    };
  },
  
  watchQuery: true,
});
</script>

