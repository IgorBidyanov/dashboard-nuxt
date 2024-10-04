<template>
  <div class="input-wrapper">
    <input
      class="input"
      :class="{ 'input--error': errorText }"
      :placeholder="placeholder"
      :value="model"
      @input="onInput"
    />

    <p class="input__error">{{ errorText }}</p>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  placeholder?: string
  errorText?: string
}

const model = defineModel<string>()
const { placeholder, errorText } = defineProps<IProps>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  model.value = target.value
}
</script>

<style lang="scss" scoped>
.input {
  min-width: 120px;
  border: 1px solid $light-gray;
  border-radius: 4px;
  padding: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  background-color: $white;
  outline: none;

  &--error {
    border-color: $red;
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__error {
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: $red;
  }
}
</style>
