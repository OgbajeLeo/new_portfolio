<template>
  <div class="py-12 lg:py-24">
    <div id="statistics" class="flex justify-center items-center">
      <h1
        class="lg:text-7xl text-4xl font-black text-center lg:mt-24 my-12 text-[#163537] dark:text-gray-200"
      >
        Statistics
      </h1>
    </div>

    <div class="card-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      <div
        v-for="(stat, index) in statistics"
        :key="index"
        class="w-full rounded-md overflow-hidden border shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 pt-8 text-center">
          <!-- <div class="mb-4 flex justify-center">
            <div v-html="stat.icon" class="size-12 text-[#163537] dark:text-gray-300"></div>
          </div> -->
          <h2 class="sm:text-4xl text-3xl font-bold mb-2 text-[#163537] dark:text-gray-200">
            {{ stat.value }}
          </h2>
          <p class="font-semibold text-[#163537] dark:text-gray-300 sm:text-base text-sm">
            {{ stat.label }}
          </p>
          <p
            v-if="stat.description"
            class="font-light text-[#56555e] dark:text-gray-400 sm:text-sm text-xs mt-2"
          >
            {{ stat.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from "vue";

// Icon components
const ProjectsIcon = defineComponent({
  render: () =>
    h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
    }, [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z",
      }),
    ]),
});

const ExperienceIcon = defineComponent({
  render: () =>
    h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
    }, [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M20.25 14.15v4.25c0 .414-.336.75-.75.75h-4.5a.75.75 0 01-.75-.75v-4.25m0 0h4.125c.621 0 1.125-.504 1.125-1.125V11.25c0-4.56-3.69-8.25-8.25-8.25S3 6.69 3 11.25v1.875c0 .621.504 1.125 1.125 1.125h4.125m9.75-8.625v8.625m0 0v-4.875c0-.621-.504-1.125-1.125-1.125h-4.5c-.621 0-1.125.504-1.125 1.125v4.875m0 0H6.75m9.75 0v-4.875c0-.621-.504-1.125-1.125-1.125h-4.5c-.621 0-1.125.504-1.125 1.125v4.875m0 0H6.75",
      }),
    ]),
});

const ClientsIcon = defineComponent({
  render: () =>
    h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
    }, [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
      }),
    ]),
});

const CodeIcon = defineComponent({
  render: () =>
    h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
    }, [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
      }),
    ]),
});

const statistics = [
  {
    value: "80+",
    label: "Projects Completed",
    description: "Successfully delivered web applications",
    icon: ProjectsIcon,
  },
  {
    value: "4+",
    label: "Years Experience",
    description: "Building modern web solutions",
    icon: ExperienceIcon,
  },
  {
    value: "30+",
    label: "Happy Clients",
    description: "Satisfied with my work",
    icon: ClientsIcon,
  },
  {
    value: "15+",
    label: "Technologies",
    description: "Mastered and actively using",
    icon: CodeIcon,
  },
];
</script>

<style scoped>
#statistics:target {
  background-color: #f7f7f7;
  transition: background-color 0.5s ease-in-out;
}

.dark #statistics:target {
  background-color: #1f2937;
}
</style>

