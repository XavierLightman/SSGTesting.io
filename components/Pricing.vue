<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:px-8">
      <!-- xs to lg -->
      <div class="max-w-2xl mx-auto lg:hidden" :defaultPrice="defaultPrice" :monthlyPrice="monthlyPrice" :annualPrice="annualPrice">
        <div class="px-4">
          <h2 class="text-lg leading-6 font-medium text-gray-900"> {{defaultPrice.title}}</h2>
          <p class="mt-4">
            <span class="text-4xl font-extrabold text-gray-900">{{defaultPrice.price}}</span>
            
          </p>
          <p class="mt-4 text-sm text-gray-500">
            {{defaultPrice.note}}
          </p>
        </div>

        <table class="mt-8 w-full">
          <caption
            class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left"
          >
            Features
          </caption>
          <thead>
            <tr>
              <th class="sr-only" scope="col">Feature</th>
              <th class="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr
              class="border-t border-gray-200"
              v-for="(feature, index) in pricingFeatures"
              :key="index"
            >
              <template v-if="feature.default">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  {{ feature.feature_title }}
                </th>
                <td class="py-5 pr-4">
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </template>
            </tr>
          </tbody>
        </table>

        <div class="px-4 mt-16">
          <h2 class="text-lg leading-6 font-medium text-gray-900">{{monthlyPrice.title}}</h2>
          <p class="mt-4">
            <span class="text-4xl font-extrabold text-gray-900">{{monthlyPrice.price}}</span>
            
          </p>
          <p class="mt-4 text-sm text-gray-500">
                       {{monthlyPrice.note}}
          </p>
        </div>

        <table class="mt-8 w-full">
          <caption
            class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left"
          >
            Features
          </caption>
          <thead>
            <tr>
              <th class="sr-only" scope="col">Feature</th>
              <th class="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr
              class="border-t border-gray-200"
              v-for="(feature, index) in pricingFeatures"
              :key="index"
            >
              <template v-if="feature.monthly">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  {{ feature.feature_title }}
                </th>
                <td class="py-5 pr-4">
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </template>
            </tr>
          </tbody>
        </table>

        <div class="px-4 mt-16">
          <h2 class="text-lg leading-6 font-medium text-gray-900">{{annualPrice.title}}</h2>
          <p class="mt-4">
            <span class="text-4xl font-extrabold text-gray-900">{{annualPrice.price}}</span>
            
          </p>
          <p class="mt-4 text-sm text-gray-500">
            {{annualPrice.note}}
          </p>
        </div>

        <table class="mt-8 w-full">
          <caption
            class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left"
          >
            Features
          </caption>
          <thead>
            <tr>
              <th class="sr-only" scope="col">Feature</th>
              <th class="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr
              class="border-t border-gray-200"
              v-for="(feature, index) in pricingFeatures"
              :key="index"
            >
              <template v-if="feature.annual">
                <th
                  class="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                  scope="row"
                >
                  {{ feature.feature_title }}
                </th>
                <td class="py-5 pr-4">
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="ml-auto h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Yes</span>
                </td>
              </template>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- lg+ -->
      <div class="hidden lg:block">
        <table class="w-full h-px table-fixed">
          <caption class="sr-only">
            Pricing plan comparison
          </caption>
          <thead>
            <tr>
              <th
                class="pb-4 px-6 text-sm font-medium text-gray-900 text-left"
                scope="col"
              >
                <span class="sr-only">Feature by</span>
                <span>Plans</span>
              </th>
              <th
                class="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                scope="col"
                v-for="(plan, index) in pricingPlans"
                :key="index"
              >
                {{ plan.title }}
              </th>
            </tr>
          </thead>
          <tbody class="border-t border-gray-200 divide-y divide-gray-200">
            <tr>
              <th
                class="py-8 px-6 text-sm font-medium text-gray-900 text-left align-top"
                scope="row"
              >
                Pricing
              </th>

              <td
                class="h-full py-8 px-6 align-top"
                v-for="(plan, index) in pricingPlans"
                :key="index"
              >
                <div class="relative h-full table">
                  <p>
                    <span class="text-xl font-extrabold text-gray-900">
                      {{ plan.price }}</span
                    >
                  </p>
                  <p class="mt-4 mb-2 text-sm text-gray-500">{{ plan.note }}</p>
                </div>
              </td>
            </tr>
            <tr>
              <th
                class="bg-gray-50 py-3 pl-6 text-sm font-medium text-gray-900 text-left"
                colspan="4"
                scope="colgroup"
              >
                Features
              </th>
            </tr>

            <tr v-for="(feature, index) in pricingFeatures" :key="index">
              <th
                class="py-5 px-6 text-sm font-normal text-gray-500 text-left"
                scope="row"
              >
                {{ feature.feature_title }}
              </th>

              <td class="py-5 px-6">
                <svg
                  v-if="feature.default"
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  v-if="!feature.default"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span class="sr-only">Included in Basic</span>
              </td>

              <td class="py-5 px-6">
                <svg
                  v-if="feature.monthly"
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  v-if="!feature.monthly"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span class="sr-only">Included in Essential</span>
              </td>

              <td class="py-5 px-6">
                <svg
                  v-if="feature.annual"
                  class="h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  v-if="!feature.annual"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span class="sr-only">Included in Premium</span>
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pricingFeatures",
  props: ["pricingFeatures", "pricingPlans", "defaultPrice","monthlyPrice", "annualPrice"],
};
</script>