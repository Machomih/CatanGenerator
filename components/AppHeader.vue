<template>
  <div>
    <header class="header">
      <div class="main-navbar">
        <div class="logo">
          <h2 class="title">
            Catan Board Generator
          </h2>
        </div>
        <div class="menu">
          <h3 class="sub-menu">Scenarios</h3>
          <h3 class="sub-menu">Rules</h3>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
$sm: 320px;
$md: 768px;
$lg: 1024px;
$xl: 1280px;
$xxl: 1536px;

.header {
  width: 100%;

  color: white;
  background: radial-gradient(circle at 81.9% 53.5%, rgb(173, 53, 53) 16.3%, rgb(240, 60, 60) 100.2%);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;

  font-size: 10px;

  @media screen and (min-width: $md){
    font-size: 15px;
  }
  @media screen and (min-width: $lg ) {
    font-size: 20px;
  }

  .main-navbar {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .logo {
      width: 40%;
    }

    .menu {
      width: 40%;
      display: flex;
      justify-content: flex-end;
      gap: 30px;
    }
  }
}
</style>