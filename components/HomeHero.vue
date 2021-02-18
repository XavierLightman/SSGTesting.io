<template>


<div :heroContent="heroContent">
  <div class="relative overflow-hidden">


    <main>
      <div class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div class="lg:py-24">
                <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span class="block">{{ heroContent.title }} </span>
                </h1>
                <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    {{ heroContent.paragraph_one }}                
                </p>
                <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    {{ heroContent.paragraph_two }}                
                </p>
                <div class="flex flex-row justify-center md:justify-between max-w-sm">
                  <a :href="heroContent.apple_app_store_link" target="_blank" class="cursor-pointer mt-8 w-full inline-flex items-center justify-center text-base font-medium rounded-md sm:w-auto mr-3">
                    <img :src="heroContent.apple_image"/>
                  </a>
                  <a :href="heroContent.google_play_store_link" target="_blank" class="cursor-pointer mt-8 w-full inline-flex items-center justify-center text-base font-medium rounded-md sm:w-auto">
                    <img :src="heroContent.google_image"/>
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" :src="heroContent.image">
              </div>
            </div>
          
          </div>
        </div>
      </div>

      <!-- More main page content here... -->
    </main>
  </div>
</div>

      

      <!-- More main page content here... -->

</template>


<script>
  export default {
    name: 'HomeHero',
    props: ['heroContent'],
  }
</script>