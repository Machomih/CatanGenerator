<template>
  <div>
    <p>Count: {{ counter }}</p>
    <button @click="handleClick">Increment</button>
  </div>
</template>

<script lang="ts" setup>
const counter = ref(0); // executes in server and client environments

const handleClick = () => {
  counter.value++; // executes only in a client environment
};
</script>

<style>

</style>