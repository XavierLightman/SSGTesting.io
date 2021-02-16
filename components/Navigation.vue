<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="-ml-2 mr-2 flex items-center md:hidden">
            <!-- Mobile menu button -->
            <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false" v-on:click="toggleNavbar()">
              <span class="sr-only">Open main menu</span>
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto" src="../static/images/SAPLogoSmallWhite.png" alt="Workflow">
            <img class="hidden lg:block h-8 w-auto" src="../static/images/SAPLogoWhite.svg" alt="Workflow">
          </div>
          <div class="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <div class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium relative dropNav cursor-pointer">
              <span> Solutions </span>
              <div class="hidden batman">
                <div class="absolute z-10 -ml-4 mt-3 transform px-2 w-52 tier-two">
                  <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-white p-5">
                      <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">                 
                          <p class="text-base font-medium text-gray-900">
                            Features
                          </p>   
                      </a>
                      <a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">        
                          <p class="text-base font-medium text-gray-900">
                            Cloud Subscription
                          </p>  
                      </a>
                    </div>      
                  </div>
                </div>
              </div>
            </div>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Support</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Release notes</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Status</a>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <button type="button" class="mr-3 relative inline-flex items-center px-4 py-2 border border-sapAccentBlue shadow-sm text-sm font-medium rounded-md text-sapAccentBlue bg-transparent hover:bg-sapAccentBlueHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
              <span>Download</span>
            </button>
            <button type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sapAccentBlue hover:bg-sapAccentBlueHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
              <span>Sign In</span>
            </button>
          </div>

        </div>
      </div>
    </div>


    <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Solutions</a>
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Support</a>
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Release Notes</a>
        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Status</a>        
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        showMenu: false
      }
    },
    computed: {
      isLogin() {
        return this.$route.name === "features";
      },
      setColours(){
        console.log(this.$route.name)
        return this.$route.name === "index";
      }
    },
    methods: {
      toggleNavbar: function(){
        this.showMenu = !this.showMenu;
      }
    }
  };
</script>

<style lang="css" scoped>
  .drop-nav:hover > .batman {
    @apply block;
  }
</style>

