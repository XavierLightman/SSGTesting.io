<template>
  <div class="flex flex-col">
    <Navigation />
    <features-list :features="features"/>
    <FeaturesMoreTools />
    <it-begins-here :itBeginsHere="itBeginsHere" />
    <Footer
      :footerLinks="footerLinks"
      :footerPolicies="footerPolicies"
      :footerRights="footerRights"
    />
  </div>
</template>




<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  async asyncData({ $content }) {
    const features = await $content("features").sortBy("order", "asc").fetch();
    const itBeginsHere = await $content("common/it-all-begins-here").fetch();
    const footerLinks = await $content("common/footer-links").fetch();
    const footerPolicies = await $content("common/footer-policies").fetch();
    const footerRights = await $content("common/footer-rights/footer-rights-snippet").fetch();
    return {
      features,
      itBeginsHere,
      footerLinks,
      footerPolicies,
      footerRights
    };
  },  
  watchQuery: true,
});
</script>



