<template>
  <div class="errorPage">
    <h1 class="errorPage__title">OOPS</h1>

    <nuxt-link to="/">{ Назад }</nuxt-link>
  </div>
</template>

<style lang="scss">
.errorPage {
  @include flexCenter;
  flex-direction: column;
  height: 100vh;
  gap: 24px;
  color: $white;
  background-color: $black;

  &__title {
    margin: 0;
    font: {
      weight: 700;
      size: clamp(60px, 10vw, 100px);
      line-height: 100%;
    }
  }
}
</style>
