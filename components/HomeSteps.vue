<template>
  <div
    class="py-16 bg-gray-50 overflow-hidden lg:py-24"
    :homeStepsHeader="homeStepsHeader"
  >
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg
        class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
        />
      </svg>

      <div class="relative">
        <h2
          class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          {{ homeStepsHeader.home_steps_header }}
        </h2>
        <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          magnam voluptatum cupiditate veritatis in, accusamus quisquam.
        </p>
      </div>

      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div class="relative">
          <dl class="mt-10 space-y-10">
            <div class="flex" v-for="(step, index) in homeSteps" :key="index">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-sapAccentBlue text-white"
                >
                  <img class="h-6 w-6" alt="" :src="step.icon" />
                </div>
              </div>
              <div class="ml-4">
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  {{ step.title }}
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  {{ step.description }}
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
          <svg
            class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
            width="784"
            height="404"
            fill="none"
            viewBox="0 0 784 404"
          >
            <defs>
              <pattern
                id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="784"
              height="404"
              fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
            />
          </svg>
          <img
            class="relative mx-auto"
            width="490"
            alt=""
            :src="homeStepsHeader.image"
          />
        </div>
      </div>

      <div class="mt-5 mx-auto sm:flex sm:justify-center md:mt-8">
          <div class="rounded-md shadow">
            <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sapAccentBlue hover:bg-sapAccentBlueHover md:py-4 md:px-10">
              {{ homeStepsHeader.link_title_one }}
            </a>
          </div>
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sapAccentBlue bg-white hover:bg-sapAccentBlueHover hover:text-white md:py-4 md:px-10">
            {{ homeStepsHeader.link_title_two }}
            </a>
          </div>
        </div>
      </div>
    </div>

</template>


<script>
export default {
  name: "HomeHero",
  props: ["homeStepsHeader", "homeSteps"],
};
</script>