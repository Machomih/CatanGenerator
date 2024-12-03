<template>
  <div class="board">
    <div v-if="boardRows.length == 0" class="loading">Loading...</div>
    <div v-else class="hex-board">
      <NuxtImg alt="board margin" class="board-margin" sizes="sm:350px md:600px lg:1150px" densities="x1 x2"
               src="/boards/default3-4.png"/>
      <div class="hex-grid">
        <div v-for="(hexRow, rowIndex) in boardRows" :key="rowIndex" class="hex-row">
          <div v-for="(hex, hexIndex) in hexRow.hexes" :key="hexIndex" class="hex">
            <NuxtImg :alt="'Hex tile: ' + hex.name" :src="`/hexes/${hex.name}.png` || '/hexes/waterHex.png'"
                     class="hex-background" sizes="sm:52px md:90px lg:172px"/>
            <div v-if="hex.number > 0" :class="`hex-number number-` + hex.number">
              <p class="number">{{ hex.number }}</p>
              <div class="bullets">
                <p v-for="iterator in hex.bullets" class="bullet">.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

// Dealing with the result from Board API
const {data: boardData, error} = await useFetch('/api/board')
if (error.value) {
  console.error('Error fetching board data:', error.value)
}
const boardRows = boardData?.value || []


</script>

<style lang="scss">
$sm: 320px;
$md: 769px;
$lg: 1025px;
$xl: 1280px;
$xxl: 1536px;

.board {
  width: 100%;
  height: 100%;
  font-size: 40px;

  @media screen and (max-width: $sm) {
    font-size: 15px;
  }

  @media screen and (min-width: $sm) {
    font-size: 17px;
  }

  @media screen and (min-width: $lg) {
    font-size: 35px;
  }

  .loading {
    position: relative;
    margin: 2em;
    width: 100%;
    height: 100%;
    font-size: 2em;
  }

  .hex-board {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    .hex-grid {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;

      margin-top: 32px;

      @media screen and (min-width: $md) {
        margin-top: 50px;
      }

      @media screen and (min-width: $lg) {
        margin-top: 100px;
      }

      .hex-row {
        display: flex;
        margin-bottom: -15px;

        @media screen and (min-width: $md) {
          margin-bottom: -26px;
        }

        @media screen and (min-width: $lg) {
          margin-bottom: -50px;
        }

        .hex {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 2;

          .hex-number {
            position: absolute;

            display: flex;
            flex-direction: column;
            align-items: center;


            width: 1.5em;
            /* Adjust for desired circle size */
            height: 1.5em;
            border-radius: 50%;
            /* Makes the element circular */

            color: black;
            background-color: #f4a261;
            /* Optional: Add a subtle border for better visibility */
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            /* Optional shadow for depth */

            @media screen and (min-width: $md) {
              width: 2em;
              height: 2em;
            }

            @media screen and (min-width: $lg) {
              width: 2em;
              height: 2em;
            }

            .number {
              margin: 0;
              height: 40%
            }

            .bullets {
              display: flex;
              flex-direction: row;
              /* Stack bullets vertically */
              align-items: center;
              /* Center bullets horizontally */
              justify-content: center;
              /* Center bullets vertically */
              height: 40%;

              .bullet {
                margin: 0;
              }
            }
          }

          .number-6,
          .number-8 {
            color: red;
          }
        }
      }
    }
  }
}
</style>