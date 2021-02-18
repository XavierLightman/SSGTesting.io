<template>
<section class="py-12 bg-gray-900 overflow-hidden md:py-20 lg:py-24">
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
        Testimonials
    </h2>
    <svg class="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0" width="364" height="384" viewBox="0 0 364 384" fill="none">
      <defs>
        <pattern id="eab71dd9-9d7a-47bd-8044-256344ee00d0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="364" height="384" fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
    </svg>

    <div class="relative">
      <blockquote class="mt-10">
        <div class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-300" v-for="(testimonial, index) in homeTestimonials" :key="index">
            <div v-if="index == currentIndex">
                <p class="text-white pb-2"> {{ testimonial.title }} </p>
                <p class="italic"> {{ testimonial.comment }} </p>
            </div>
        </div>
      </blockquote>

     <div class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-300 flex flex-row justify-between mt-10">
         <div class="w-3 h-3 rounded-full cursor-pointer" v-bind:class="{'bg-sapAccentBlue': index == currentIndex, 'bg-gray-50': index !== currentIndex}" v-for="(testimonial, index) in homeTestimonials" :key="index" v-on:click="toggleTestimonial(index)"></div>
     </div>
       
    </div>
  </div>
</section>
</template>



<script>
export default {
  name: "homeTestimonials",
  props: ["homeTestimonials"],
    data() {
      return {
        currentIndex: 0,
        amounOftestimonials: this.homeTestimonials.length - 1
      }
    },
    mounted(){
        // window.setInterval(()=>{
        // this.autoToggle();
        // }, 5000);
    },    
    methods: {
      toggleTestimonial: function(index){
        this.currentIndex = index
      },
      autoToggle(){

        console.log('AutoToggle - currentIndex = ', this.currentIndex);
        console.log('AutoToggle - amounOftestimonials = ', this.amounOftestimonials);

       this.currentIndex++;
        if ( this.currentIndex = this.amounOftestimonials ) { 
            console.log('same');
        } else {
            console.log('not the same');
        }
    

      }
    }
};
</script>
