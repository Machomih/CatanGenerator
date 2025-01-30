<template>
  <div class="w-full h-full sm:text-md md:text-xl lg:text-2xl xl:text-3xl">
    <div v-if="boardRows.length == 0" class="loading">Loading...</div>
    <div v-else id="hex-board" class="w-full flex flex-col items-center relative">
      <Default34/>
      <div id="hex-grid" class="flex flex-col items-center justify-center absolute top-7 md:top-12 lg:top-20 xl:top-24">
        <div v-for="(hexRow, rowIndex) in boardRows" :key="rowIndex" class="flex -mb-4 md:-mb-6 lg:-mb-10 xl:-mb-12">
          <div
              v-for="(hex, hexIndex) in hexRow.hexes" :key="hexIndex"
              class="flex items-center justify-center relative z-2">
            <NuxtImg
                :alt="'Hex tile: ' + hex.name" :src="`/hexes/${hex.name}.png` || '/hexes/waterHex.png'"
                sizes="sm:60px md:90px lg:135px xl:172px"/>
            <div v-if="hex.number > 0" :class="`hex-number number-` + hex.number">
              <p class="m-0 h-2/5">{{ hex.number }}</p>
              <div class="flex flex-row items-center justify-center h-2/5">
                <p v-for="iterator in hex.bullets" :key="iterator" class="m-0">.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <UButton label="generate" size="sm" @click="makeApiCall"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Dealing with the result from Board API
import Default34 from "~/components/Board/MainGame/default3-4.vue";

const {data, execute} = useFetch(createApiEndpoint)
const boardRows = computed(() => data.value || [])

function makeApiCall() {
  execute()
}

function createApiEndpoint() {
  const query: BoardMap<string, boolean | number | string> = new BoardMap()
  query.set("sixEight", false)
  query.set("twoTwelve", false)
  query.set("desert", true)
  query.set("numberOfPlayers", 4)
  query.set("extension", "base")
  query.set("scenario", "default")

  let boardUrl = "/api/board?"
  for (const key of query.keys()) {
    boardUrl = boardUrl + key.toString() + ":" + query.get(key) + "&"
  }
  console.log(boardUrl)
  return boardUrl
}

console.log(boardRows)

</script>

<style lang="scss">
$md: 768px;

.loading {
  position: relative;
  margin: 2em;
  width: 100%;
  height: 100%;
  font-size: 2em;
}

.hex-number {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 2em;
  height: 2em;
  border-radius: 50%;
  /* Makes the element circular */

  color: black;
  background-color: #f4a261;
}

.number-6,
.number-8 {
  color: red;
}
</style>