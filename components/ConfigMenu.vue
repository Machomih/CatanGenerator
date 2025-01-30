<template>
  <div class="w-full h-full flex flex-col">
    <UButton
        :ui="{rounded: 'rounded-full'}" class="w-52 self-center justify-center mb-5" icon="system-uicons:shuffle"
        label="Generate" size="sm"
    />
    <div class="w-full h-full flex flex-col items-start ml-10 gap-3 text-lg">
      <div>
        <label for="checkbox-rules">Rules:</label>
        <div id="checkbox-rules">
          <UCheckbox v-model="sixEight" disabled label="6&8 can touch" name="SixEight"/>
          <UCheckbox v-model="twoTwelve" disabled label="2&12 can touch" name="TwoTwelve"/>
          <UCheckbox v-model="desert" label="Dessert in the middle" name="Desert"/>
        </div>

      </div>
      <div>
        <label for="players-radio">Number of players:</label>
        <URadioGroup
            id="players-radio"
            v-model="selectedNumberOfPlayers"
            :options="options"
        />
      </div>
      <div>
        <label for="extension-select">Choose an extension</label>
        <USelect
            id="extension-select"
            v-model="selectedExtension"
            :options="extensions"
            option-attribute="name"
        />
      </div>
      <div>
        <label for="scenario-select">Choose a scenario</label>
        <USelect
            id="scenario-select"
            v-model="selectedScenario"
            :options="scenarios"
            option-attribute="name"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Local state
const sixEight = ref(false);
const twoTwelve = ref(false);
const desert = ref(false);
const selectedNumberOfPlayers = ref("4");
const selectedExtension = ref("base");
const selectedScenario = ref("default");

// Options
const options = [
  {value: "4", label: "3-4"},
  {value: "6", label: "5-6"},
];

const extensions = [
  {name: "Base Game", value: "base"},
  {name: "Seafarers", value: "sf", disabled: true},
  {name: "Cities & Knights", value: "c&k"},
];

const scenarios = [
  {name: "Default", value: "default"},
  {name: "Random", value: "random"},
];

</script>

<style></style>
