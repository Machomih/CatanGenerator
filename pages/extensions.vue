<template>
  <div>
    <USelect id="extension-select" v-model="selectedExtension" sizes="md" variant="outline" :options="extensions" option-attribute="name"/>
  </div>
</template>

<script lang="ts" setup>
const extensions = [
  {
    name: "Base Game",
    value: "base",
  },
  {
    name: "Seafarers",
    value: "sf",
    disabled: true,
  },
  {
    name: "Cities & Knights",
    value: "c&k",
  },
];
const selectedExtension = ref("base");
</script>

<style></style>