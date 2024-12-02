<template>
  <div>
    <div class="config-menu">
      <div class="config-buttons">
        <form action="">
          <p class="text">Number of players</p>
          <div class="number-of-players">
            <label for="4players" class="label">2-4 Players</label>
            <input id="4players" type="radio" name="4players" value="4" required>
            <label for="6players" class="label">5-6 Players</label>
            <input id="6players" type="radio" name="6players" value="6" required>
          </div>

          <p class="text">Extension</p>
          <div class="extensions">
            <select id="game" class="games">
              <option value="base-game">Base Game</option>
              <option value="seafarers">Seafarers</option>
              <option value="c&k">Cities and Knights</option>
              <option value="e&p">Explorers and Pirates</option>
              <option value="t&b">Traders and Barbarians</option>
              <option value="aoe">Age of Enlightenment</option>
            </select>
          </div>

          <p class="text">Scenarios</p>
          <div class="scenarios">
            <select id="scenario" class="games">
              <option value="default">Default</option>
              <option value="random">Random</option>
            </select>
          </div>
        </form>
      </div>
      <div class="generate-button">
        <p class="placeholder">This is where the buttons will come</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
  .config-menu {
  width: 30%;
  height: 100%;

  border-left: 5px solid black;
  padding-left: 2px;
}

.config-buttons {
  width: 100%;
  height: 60%;
}

.generate-button {
  width: 100%;
  height: 40%;
}
</style>