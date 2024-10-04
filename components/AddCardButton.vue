<template>
  <div class="addButton" @click="emits('toggleModal')"></div>
</template>

<script setup lang="ts">
const emits = defineEmits(['toggleModal'])
</script>

<style scoped lang="scss">
.addButton {
  @include flexCenter;
  position: relative;
  width: 40px;
  height: 40px;
  border: 1px solid $purple;
  border-radius: 100%;
  background: $white;
  cursor: pointer;
  z-index: 0;

  transition:
    transform 0.2s,
    box-shadow 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05) rotate(360deg);
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 50%;
    height: 2px;
    background: $purple;
    border-radius: 5px;
  }

  &::before {
    transform: rotate(90deg);
  }
}
</style>
