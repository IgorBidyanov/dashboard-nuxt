import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface ICard {
  id: number
  title: string
  selected: boolean
  description: string
}

export const useCardsStore = defineStore('cards', () => {
  const cards = ref<ICard[]>([])

  const selectedCard = computed(() => {
    return cards.value.find((card) => card.selected)
  })

  const removeCard = (id: number) => {
    cards.value = cards.value.filter((card) => card.id !== id)
    localStorage.setItem('cards', JSON.stringify(cards.value))
  }

  const loadCards = () => {
    const cardsTmp = localStorage.getItem('cards')
    cards.value = cardsTmp ? JSON.parse(cardsTmp) : []
  }

  const selectCard = (id: number) => {
    cards.value = cards.value.map((card) => {
      if (card.id === id) {
        card.selected = !card.selected
      }
      return card
    })
  }

  const editCard = ({
    id,
    title,
    description
  }: {
    id: number
    title: string
    description: string
  }) => {
    cards.value = cards.value.map((card) => {
      if (card.id === id) {
        card.title = title
        card.description = description
      }
      return card
    })
    localStorage.setItem('cards', JSON.stringify(cards.value))
  }

  const addCard = ({ title, description }: { title: string; description: string }) => {
    cards.value.push({
      id: Date.now(),
      title,
      selected: false,
      description
    })
    localStorage.setItem('cards', JSON.stringify(cards.value))
  }

  return {
    cards,
    removeCard,
    loadCards,
    selectCard,
    selectedCard,
    editCard,
    addCard
  }
})
