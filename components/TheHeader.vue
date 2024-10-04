<template>
  <header class="header">
    <div class="header__left">
      <IconsArrowIcon
        :class="['header__arrow', { reverse: isCollapsed }]"
        @click="sidebarStore.toggleMenu"
      />

      <h1 class="header__title">{{ title }}</h1>
    </div>

    <AddCardButton v-if="route.path === '/settings'" @toggle-modal="showAddModal" />

    <Teleport to="body">
      <ModalsWrapper v-if="isAddCard" @close-modal="showAddModal">
        <template #default="{ close }">
          <ModalsAddCard :close="close" />
        </template>
      </ModalsWrapper>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
import { useSidebarStore } from '~/store/sidebarStore'

const sidebarStore = useSidebarStore()
const isCollapsed = computed(() => sidebarStore.isCollapsed) // Состояние для отслеживания состояния меню
const route = useRoute()

const title = computed(() => (route.path === '/settings' ? 'Настройки' : 'Карточки'))

const isAddCard = ref<boolean>(false)

// Функция для отображения модалки добавления карточки
const showAddModal = () => {
  isAddCard.value = !isAddCard.value
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  padding: 16px;
  background-color: $white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  &__left {
    @include flexCenter;
    gap: 8px;
  }

  &__title {
    margin: 0;
    font: {
      weight: 600;
      size: 24px;
      line-height: 120%;
    }
    color: $black;
  }

  &__arrow {
    display: none;
    transform: rotate(180deg);

    &.reverse {
      transform: rotate(0);
    }
  }
}

@media (max-width: 1023px) {
  .header {
    &__arrow {
      display: block;
    }
  }
}
</style>
