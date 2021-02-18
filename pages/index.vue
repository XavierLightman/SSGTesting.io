<template>
  <div class="flex flex-col">
    <Navigation />
    <home-hero :heroContent="heroContent"/>
    <home-features :features="features" />
    <home-steps :homeStepsHeader="homeStepsHeader" :homeSteps="homeSteps"/>
    <home-testimonials :homeTestimonials="homeTestimonials" />
    <it-begins-here :itBeginsHere="itBeginsHere" />
    <Footer :footerLinks="footerLinks" :footerPolicies="footerPolicies" :footerRights="footerRights"/>   
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  async asyncData({ $content }) {
    const features = await $content("home-features").sortBy("feature_order", "asc").fetch();
    const heroContent = await $content("home-hero/professional-site-audit-management").fetch();
    const homeStepsHeader = await $content("home-steps/header/Home Steps Header").fetch();
    const homeSteps = await $content("home-steps").sortBy("feature_order", "asc").fetch();
    const homeTestimonials = await $content("home-testimonials").fetch();
    const itBeginsHere = await $content("common/it-all-begins-here").fetch();
    const footerLinks = await $content("common/footer-links").fetch();
    const footerPolicies = await $content("common/footer-policies").fetch();
    const footerRights = await $content("common/footer-rights/footer-rights-snippet").fetch();
    console.log('footerRights = ', footerRights)

    return {
      features,
      heroContent,
      homeStepsHeader,
      homeSteps,
      homeTestimonials,
      itBeginsHere,
      footerLinks,
      footerPolicies,
      footerRights
    };
  },
  
  watchQuery: true,
});
</script>

<style>
  /* home route and active route will show in bold as it matches / and /about */
  /* exact link will show the primary color for only the exact matching link */
  a.nuxt-link-exact-active {
    @apply text-sapAccentBlue bg-gray-900;
  }
  .mobileNav a.nuxt-link-exact-active {
    @apply text-sapAccentBlue bg-gray-300;
  }
</style>