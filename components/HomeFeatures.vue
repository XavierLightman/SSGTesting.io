<template>
<div class="relative bg-white py-16 sm:py-24 lg:py-32">
  <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
    <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
      Features
    </p>
    <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
      Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
    </p>
    <div class="mt-12">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="pt-6" v-for="(feature, index) in features" :key="index">
          <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
            <div class="-mt-6">
              <div>
                <span class="inline-flex items-center justify-center p-3 bg-sapAccentBlue rounded-md shadow-lg">
                  <!-- Heroicon name: outline/cloud-upload -->
                  <img v-bind:src="feature.feature_icon"/>
                </span>
              </div>
              <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight"> {{ feature.feature_title }}</h3>
              <p class="mt-5 text-base text-gray-500">
                {{ feature.feature_description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>



<script>
  export default {
    name: 'HomeFeatures',
    props: ['features'],
  }
</script>



