<template>
  <section class="home">
    <div class="cards-container">
      <TheCard v-for="card in cards" :key="card.id" :card="card" @delete-card="removeCard" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCardsStore } from '@/store/cardsStore'

const cardsStore = useCardsStore()

const cards = computed(() => cardsStore.cards) // карточки

// Функция для удаления карточки
const removeCard = (id: number) => {
  cardsStore.removeCard(id)
}

// Функция для отслеживания изменения в LocalStorage
const handleStorageChange = (event: StorageEvent) => {
  if (event?.key === 'cards') {
    cardsStore.loadCards()
  }
}

onMounted(() => {
  window.addEventListener('storage', handleStorageChange)
  cardsStore.loadCards()
})

onBeforeUnmount(() => {
  window.removeEventListener('storage', handleStorageChange)
})
</script>

<style scoped lang="scss">
.home {
  padding: 16px;
}
</style>
