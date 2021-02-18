<template>
  <div>

    <div class="bg-gray-800">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
            <div class="max-w-xl">
            <h2 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Features</h2>
            <p class="mt-5 text-xl text-gray-400">Start building for free, then add a site plan to go live. Account plans unlock additional features.</p>
            </div>
        </div>
    </div>


    <div class="content-parent lg:mx-auto lg:max-w-7xl lg:px-8 py-10 lg:py-32" v-for="(feature, index) in features" :key="index">
      <div class="content-row flex flex-col lg:flex-row items-center">
        <div class="w-full lg:w-1/2 py-4 lg:py-20">
          <div class="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none items-center">    
              <div class="text-container">
                <h2 class="text-3xl font-extrabold tracking-tight text-gray-900"> {{ feature.title }} </h2>
                <p class="mt-4 text-lg text-gray-500"> {{ feature.description }}</p>
              </div> 
          </div>
        </div>
        <div class="w-full lg:w-1/2 flex">     
            <div class="lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img class="w-full rounded-xl shadow-xl" :src="feature.image" :alt="feature.title">
            </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "FeaturesList",
  props: ["features"],
};
</script>

<style lang="css" scoped>
    .content-parent:nth-child(even) > .content-row {
        @apply lg:flex-row-reverse;
    }
</style>