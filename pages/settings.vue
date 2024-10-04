<template>
  <section class="settings">
    <div class="cards-container">
      <TheCard
        v-for="card in cards"
        :key="card.id"
        :card="card"
        is-editable
        @delete-card="showDeleteModal(card.id)"
        @edit-card="showEditModal(card.id)"
      />
    </div>

    <Teleport to="body">
      <ModalsWrapper v-if="isEditCard" @close-modal="showEditModal">
        <template #default="{ close }">
          <ModalsAddCard :close="close" is-edit />
        </template>
      </ModalsWrapper>

      <ModalsWrapper v-if="isDeleteCard" @close-modal="showDeleteModal">
        <template #default="{ close }">
          <ModalsDeleteCard :close="close" />
        </template>
      </ModalsWrapper>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { useCardsStore } from '@/store/cardsStore'

const cardsStore = useCardsStore()

const cards = computed(() => cardsStore.cards) // Карточки

const isDeleteCard = ref<boolean>(false) // Флаг удаления карточки
const isEditCard = ref<boolean>(false) // Флаг редактирования карточки

// Функция для отображения модалки удаления карточки
const showDeleteModal = (id: number) => {
  if (id) {
    cardsStore.selectCard(id)
  }
  isDeleteCard.value = !isDeleteCard.value
}

// Функция для отображения модалки редактирования карточки
const showEditModal = (id: number) => {
  if (id) {
    cardsStore.selectCard(id)
  }
  isEditCard.value = !isEditCard.value
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

<style scoped lamg="scss">
.settings {
  padding: 16px;
}
</style>
