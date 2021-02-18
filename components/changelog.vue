<template>
    <div class="bg-white">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col">
          <div class="w-full mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div class="sm:flex sm:flex-col sm:align-center">
              <div class="relative self-center bg-gray-100 rounded-lg p-0.5 flex">
                <button v-on:click="togglePlatform('iOS')" type="button" :class="platform === 'iOS' ? 'bg-white focus:ring-sapAccentBlue':'bg-transparent'" class="relative w-1/3 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:z-10 sm:px-8">
                  iOS
                </button>
                <button v-on:click="togglePlatform('web')" type="button" :class="platform === 'web' ? 'bg-white focus:ring-sapAccentBlue':'bg-transparent'" class="relative w-1/3 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:z-10  sm:px-8">
                  Web
                </button>
                <button v-on:click="togglePlatform('android')" type="button" :class="platform === 'android' ? 'bg-white focus:ring-sapAccentBlue':'bg-transparent'" class="relative w-1/3 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:z-10 sm:px-8">
                  Android
                </button>
              </div>
            </div>
          </div>


          <div v-if="platform === 'iOS'">
            <nuxt-content :document="iOSChangeLog" />
          </div>
          <div v-if="platform === 'web'">
              <nuxt-content :document="webChangeLog" />
          </div>
          <div v-if="platform === 'android'"> Android </div>
  </div>
  </div>
</template>


<script>
export default {
  name: "changelog",
  props: ["iOSChangeLog", "webChangeLog"],
    data() {
      return {
        platform: 'iOS'
      }
    },
  methods: {
    togglePlatform(platform){
      this.platform = platform;
    }  
    
  }
};
</script>

<style lang="css">
  .nuxt-content h1 {
    display:none;
  }
  .nuxt-content ul {
    @apply pb-10 list-disc;
  }
  .nuxt-content h2 {
    @apply border-b-2 border-sapAccentBlue text-gray-900 font-bold inline-block text-2xl pt-10;
  }
  .nuxt-content h3 {
    @apply mt-5 font-semibold py-2 px-3 rounded-md block w-20 text-center text-xs text-white mb-2;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }
  .nuxt-content h3[id*="fixed"] {
    @apply bg-blue-600;
  }
  .nuxt-content h3[id*="new"] {
    @apply bg-green-600;
  }
  .nuxt-content h3[id*="feature"] {
    @apply bg-pink-600;
  }
  .nuxt-content h3[id*="changed"] {
    @apply bg-orange-600;
  }

</style>

