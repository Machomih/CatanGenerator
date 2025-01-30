<template>
  <div>
    <div id="header" class="w-full h-12 md:h-16 flex flex-row items-center font-bold">
      <div id="title" class="w-fit h-full flex flex-initial flex-nowrap text-lg md:text-2xl">
        <ULink
            id="title-link"
            active-class="bg-gradient-to-r from-cyan-900 to-cyan-700"
            class="w-full h-full pl-5 flex items-end text-center justify-center"
            inactive-class="bg-gradient-to-r from-cyan-900 to-cyan-700"
            to="/"
        > Catan Board Generator
        </ULink>
      </div>
      <div id="space" class="h-12 md:h-16  flex-1 bg-gradient-to-r from-cyan-700 to to-sky-700"/>
      <div id="nav-links" class="w-1/4 h-full flex-initial flex flex-row justify-end text-md md:text-lg">
        <ULink
            id="extensions-link"
            active-class="bg-gradient-to-r from-sky-700 to-sky-600"
            class="w-full h-full flex items-end text-center justify-end pr-2"
            inactive-class="bg-gradient-to-r from-sky-700 to-sky-600"
            to="/extensions"
        > Extensions
        </ULink>
        <ULink
            id="rules-link"
            active-class="bg-gradient-to-r from-sky-600 to-sky-500"
            class="w-full h-full flex items-end text-center justify-center pr-2"
            inactive-class="bg-gradient-to-r from-sky-600 to-sky-500"
            to="/rules"
        > Rules
        </ULink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style>
</style>