<template>
  <h2 class="modal__title">Добавить карточку</h2>

  <form class="modal__form">
    <TheInput v-model="title" placeholder="Введите заголовок" :error-text="titleError" />

    <TheInput v-model="description" placeholder="Введите описание" :error-text="descriptionError" />
  </form>

  <div class="modal__buttons">
    <button class="modal__button safe__button" :disabled="disabledButton" @click="saveCard">
      Сохранить
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCardsStore } from '@/store/cardsStore'
interface IProps {
  close: () => void
  isEdit?: boolean
}

const cardsStore = useCardsStore()
const selectedCard = computed(() => cardsStore.selectedCard)

// Props
const { close, isEdit } = defineProps<IProps>()

const disabledButton = computed(() => title.value === '' || description.value === '')

const title = ref<string>('') // Заголовок карточки
const titleError = ref<string>('')
const description = ref<string>('') // Описание карточки
const descriptionError = ref<string>('')

const saveCard = () => {
  let err
  if (title.value === '') {
    titleError.value = 'Заголовок не может быть пустым'
    err = true
  }

  if (description.value === '') {
    descriptionError.value = 'Описание не может быть пустым'
    err = true
  }

  if (err) return

  if (isEdit && selectedCard.value) {
    const payload = {
      id: selectedCard.value.id,
      title: title.value,
      description: description.value
    }
    cardsStore.editCard(payload)
  } else {
    cardsStore.addCard({ title: title.value, description: description.value })
  }
  close()
}

onMounted(() => {
  if (isEdit && selectedCard.value) {
    title.value = selectedCard.value?.title
    description.value = selectedCard.value?.description
  }
})
</script>

<style lang="scss">
.safe__button {
  color: $green;

  &:disabled {
    color: $light-gray;
  }
}
</style>
