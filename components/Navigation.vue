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
          <div class="topNav hidden md:ml-6 md:flex md:items-center md:space-x-4 relative">
            <div class="text-gray-300 px-3 py-2 rounded-md text-sm font-medium relative dropNav cursor-pointer">
              <span> Solutions </span>
                <div class="absolute z-10 -ml-4 transform px-2 w-52 hidden tier-two">
                  <div class="ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-white p-5 mt-3 rounded-lg shadow-lg">
                      <NuxtLink  class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" to="/features">          
                          <p class="text-base font-medium text-gray-900">
                            Features
                          </p>   
                      </NuxtLink>   
                      <NuxtLink class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" to="/cloudsubscription">          
                          <p class="text-base font-medium text-gray-900">
                            Cloud Subscription
                          </p>   
                      </NuxtLink>  
                    </div>      
                  </div>
                </div>
            </div>


            <NuxtLink class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/pricing">Pricing</NuxtLink>
            <div class="text-gray-300 px-3 py-2 rounded-md text-sm font-medium relative dropNav cursor-pointer">
              <span> Support </span>
                <div class="absolute z-10 -ml-4 transform px-2 w-64 hidden tier-two">
                  <div class="ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-white p-5 mt-3 rounded-lg shadow-lg">
                      <a href="https://veamstudios.zendesk.com/hc/en-us/categories/201754349-Site-Audit-Pro-for-iOS" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">                 
                          <p class="text-base font-medium text-gray-900">
                            Site Audit Pro iOS
                          </p>   
                      </a>
                      <a href="https://veamstudios.zendesk.com/hc/en-us/categories/115000394933-Site-Audit-Pro-Cloud-on-Web" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          <p class="text-base font-medium text-gray-900">
                            Site Audit Pro Web
                          </p> 
                      </a>
                      <a href="https://veamstudios.zendesk.com/hc/en-us/categories/200362051-Site-Audit-Pro-for-Android" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">        
                          <p class="text-base font-medium text-gray-900">
                            Site Audit Pro Android
                          </p>  
                      </a>
                    </div>      
                  </div>
                </div>
            </div>
              <NuxtLink class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/changelog">Release Notes</NuxtLink>
              <NuxtLink class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/status">Status</NuxtLink>
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


    <div class="mobileNav" v-bind:class="{'hidden': !showMenu, 'flex': showMenu}">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <div>
          <div href="#" class="text-gray-400 block px-3 py-2 rounded-md text-base font-medium">Solutions</div>
          <NuxtLink class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/features">Features</NuxtLink>
          <NuxtLink class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/cloudsubscription">Cloud Subscription</NuxtLink>
        </div>
          <NuxtLink class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/pricing">Pricing</NuxtLink>
        <div>
          <div href="#" class="text-gray-400 block px-3 py-2 rounded-md text-base font-medium">Support</div>
          <a href="https://veamstudios.zendesk.com/hc/en-us/categories/201754349-Site-Audit-Pro-for-iOS" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ml-3">Site Audit Pro iOS</a>
          <a href="https://veamstudios.zendesk.com/hc/en-us/categories/115000394933-Site-Audit-Pro-Cloud-on-Web" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ml-3">Site Audit Pro Web</a>
          <a href="https://veamstudios.zendesk.com/hc/en-us/categories/200362051-Site-Audit-Pro-for-Android" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ml-3">Site Audit Pro Android</a>
        </div>
               <NuxtLink class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/changelog">Release Notes</NuxtLink>  
          <NuxtLink class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/status">Status</NuxtLink>     
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
/* .dropNav .tier-two {
    display: none;
} */

.dropNav:hover .tier-two {
    display: block;
}
  .topNav > a.nuxt-link-exact-active {
    @apply text-sapAccentBlue bg-gray-900;
  }
  .mobileNav a.nuxt-link-exact-active {
    @apply text-sapAccentBlue bg-gray-300;
  }
</style>


