<template>
  <div class="card">
    <div class="card__wrapper">
      <div class="card__content">
        <h2 class="card__title">{{ card.title }}</h2>

        <p class="card__description">{{ card.description }}</p>
      </div>
    </div>

    <div v-if="isEditable" class="card__buttons">
      <button class="card__button" @click="emits('deleteCard', card.id)">
        <IconsDeleteIcon />
      </button>

      <button class="card__button" @click="emits('editCard', card.id)">
        <IconsEditIcon />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ICard } from '@/store/cardsStore'
interface IProps {
  card: ICard
  isEditable?: boolean
}
const { card, isEditable } = defineProps<IProps>()

const emits = defineEmits(['deleteCard', 'editCard'])
</script>

<style scoped lang="scss">
.card {
  width: clamp(250px, 17vw, 300px);
  height: clamp(250px, 17vw, 300px);
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-wrap: balance;
  background-color: #fff;
  overflow: hidden;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.05);
  }

  &__wrapper {
    height: calc(100% - 40px);
    overflow: hidden;
  }

  &__content {
    @include flexColumn;
    gap: 16px;
    height: 100%;
    overflow-y: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__title {
    margin: 0;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    text-align: center;
  }

  &__buttons {
    @include flexCenter;
    gap: 8px;
    padding: 8px 0;
    background-color: $white;
  }

  &__button {
    @include flexCenter;
    flex: 1;
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: $white;
    cursor: pointer;
    transition:
      transform 0.2s,
      box-shadow 0.2s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: scale(1.05);
    }
  }
}

@media (max-width: 767px) {
  .card {
    width: 100%;
  }
}
</style>
