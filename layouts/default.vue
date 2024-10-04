<template>
  <div id="app">
    <SideBar />

    <div class="content">
      <TheHeader />

      <main class="main">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.content {
  width: 100%;
}
</style>
