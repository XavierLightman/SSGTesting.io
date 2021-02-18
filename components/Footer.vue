<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
  <footer class="bg-white" :footerRights="footerRights">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
        <div class="px-5 py-2" v-for="(policy, index) in footerPolicies" :key="index">
          <a :href="policy.url" class="text-base text-gray-500 hover:text-gray-900" target="_blank">
            {{ policy.title }}
          </a>
        </div>
      </nav>
      <div class="mt-8 flex justify-center space-x-6">
        <a :href="link.url" class="text-gray-400 hover:text-gray-500" v-for="(link, index) in footerLinks" :key="index" target="_blank">
          <span class="sr-only">Facebook</span>
          <img class="h-6 w-6" :src="link.image"/>
        </a>
      </div>
      <p class="mt-8 text-center text-base text-gray-400" >
        {{footerRights.copyrightText}}
      </p>
    </div>
  </footer>

</template>


<script>
  export default {
    name: 'Footer',
    props: ['footerLinks', 'footerPolicies', 'footerRights'],
  }
</script>
