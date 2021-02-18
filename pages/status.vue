<template>
  <div class="flex flex-col">
    <Navigation />
    <iframe
      class="w-full block border-none"
      style="height: 90rem"
      src="https://status.siteauditpro.com/"
    ></iframe>
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
head() {
    return {
      title: "Site Audit Pro - Status",
      script: [
        {
          src: "https://cdn.statuspage.io/se-v2.js",
        },
      ],
    };
  },
  async asyncData({ $content }) {
    const footerLinks = await $content("common/footer-links").fetch();
    const footerPolicies = await $content("common/footer-policies").fetch();
    const footerRights = await $content("common/footer-rights/footer-rights-snippet").fetch();
    return {
      footerLinks,
      footerPolicies,
      footerRights
    };
  },
  
  watchQuery: true,
});
</script>



