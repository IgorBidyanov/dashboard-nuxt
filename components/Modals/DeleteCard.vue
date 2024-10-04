<template>
  <h2 class="modal__title">Удалить карточку?</h2>

  <div class="modal__buttons">
    <button class="modal__button delete__button" @click="removeSelectedCard">Удалить</button>

    <button class="modal__button" @click="close">Отмена</button>
  </div>
</template>

<script setup lang="ts">
import { useCardsStore } from '@/store/cardsStore'
interface IProps {
  close: () => void
}

const cardsStore = useCardsStore()
const selectedCard = computed(() => cardsStore.selectedCard)

// Props
const { close } = defineProps<IProps>()

// Функция для удаления карточки
const removeSelectedCard = () => {
  if (selectedCard.value) {
    cardsStore.removeCard(selectedCard.value.id)
  }
  close()
}
</script>

<style scoped lang="scss">
.delete__button {
  color: $red;
}
</style>
