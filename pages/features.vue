<template>
  <div>
    <home-features :features="features"/>



  </div>
  
</template>


<script>
import HomeFeatures from '~/components/HomeFeatures.vue';
export default {
  components: { HomeFeatures },
    layout: "navigation-footer",
  async asyncData({ $content }) {
    const features = await $content("home-features").fetch();
    return {
      features,
    };
  },
  watchQuery: true,
};
</script>