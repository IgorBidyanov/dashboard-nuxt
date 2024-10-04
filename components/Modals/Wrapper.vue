<template>
  <div class="modal">
    <div class="modal__overlay" @click="close" />
    <Transition name="bounce">
      <div v-if="showContent" class="modal__content">
        <button class="modal__close-btn" @click="close"></button>
        <slot :close="close"></slot>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useCardsStore } from '@/store/cardsStore'
const showContent = ref<boolean>(false)

const cardsStore = useCardsStore()
const selectedCard = computed(() => cardsStore.selectedCard)

const emits = defineEmits(['closeModal'])

onMounted(() => {
  showContent.value = true
})

const close = () => {
  showContent.value = false
  setTimeout(() => emits('closeModal', selectedCard.value?.id), 500)
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;

  &__overlay {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  &__content {
    position: relative;
    @include flexColumn;
    gap: 24px;
    min-width: 450px;
    padding: 16px;
    background: $white;
    border-radius: 8px;
  }

  &__close-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    border: 1px solid $black;
    border-radius: 100%;
    background-color: $white;
    cursor: pointer;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50%;
      height: 1px;
      background-color: $red;
    }

    &:before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  &__title {
    font-size: 24px;
    line-height: 120%;
    text-align: center;
  }

  &__form {
    @include flexColumn;
    gap: 16px;
  }

  &__buttons {
    @include flexCenter;
    gap: 8px;
  }

  &__button {
    flex: 1;
    min-width: 150px;
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: $white;
    outline: none;
    cursor: pointer;
  }
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 767px) {
  .modal {
    &__content {
      min-width: auto;
      width: 80%;
    }

    &__button {
      min-width: auto;
    }
  }
}
</style>
