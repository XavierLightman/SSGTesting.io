<template>
    <div class="bg-white py-32" :itBeginsHere="itBeginsHere">
        <div class="max-w-2xl mx-auto text-center px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                <span class="block"> {{ itBeginsHere.title }} </span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-gray-800"> {{ itBeginsHere.summary }} </p>
            <div class="flex flex-row justify-between">
                <a :href="itBeginsHere.apple_url" target="_blank" class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
                    <img :src="itBeginsHere.apple_image"/>
                </a>
                <a :href="itBeginsHere.google_url" target="_blank" class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
                    <img :src="itBeginsHere.google_image"/>
                </a>
            </div>
        </div>
    </div>

</template>


<script>
    export default {
        name: "itBeginsHere",
        props: ["itBeginsHere"],
    };
</script>