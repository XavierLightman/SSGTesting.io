<template>
  <div class="flex flex-col">
    <Navigation />
    <changelog :iOSChangeLog="iOSChangeLog" :webChangeLog="webChangeLog"/>
    <Footer :footerLinks="footerLinks" :footerPolicies="footerPolicies" :footerRights="footerRights"/>   
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  async asyncData({ $content }) {
    const iOSChangeLog = await $content("changelogs/iOS/changelog").fetch();
     const webChangeLog = await $content("changelogs/web/changelog").fetch();
    const footerLinks = await $content("common/footer-links").fetch();
    const footerPolicies = await $content("common/footer-policies").fetch();
    const footerRights = await $content("common/footer-rights/footer-rights-snippet").fetch();
    return {
      footerLinks,
      footerPolicies,
      footerRights,
      iOSChangeLog,
      webChangeLog
    };
  },
  
  watchQuery: true,
});
</script>






