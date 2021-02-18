<template>
  <div class="flex flex-col">
    <Navigation />
    <pricing  :pricingFeatures="pricingFeatures" :pricingPlans="pricingPlans" :defaultPrice="defaultPrice" :monthlyPrice="monthlyPrice" :annualPrice="annualPrice"/>
    <Footer :footerLinks="footerLinks" :footerPolicies="footerPolicies" :footerRights="footerRights"/>   
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  async asyncData({ $content }) {
    const pricingFeatures = await $content("pricing/pricing-features").sortBy("order", "asc").fetch();
    const pricingPlans = await $content("pricing/pricing-plans").sortBy("order", "asc").fetch();
    const defaultPrice = await $content("pricing/pricing-plans/site-audit-pro").fetch();
    const monthlyPrice = await $content("pricing/pricing-plans/monthly-subscription").fetch();
    const annualPrice = await $content("pricing/pricing-plans/annual-subscription").fetch();
    const footerLinks = await $content("common/footer-links").fetch();
    const footerPolicies = await $content("common/footer-policies").fetch();
    const footerRights = await $content("common/footer-rights/footer-rights-snippet").fetch();
    return {
      footerLinks,
      footerPolicies,
      footerRights,
      pricingFeatures,
      pricingPlans,
      defaultPrice,
      monthlyPrice,
      annualPrice
    };
  },
  
  watchQuery: true,
});
</script>
