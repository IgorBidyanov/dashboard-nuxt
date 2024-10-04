<template>
  <div :class="['sidebar', { collapsed: isCollapsed }]">
    <div class="sidebar__layout" @click="sidebarStore.toggleMenu"></div>

    <div class="sidebar__content">
      <div class="sidebar__header" @click="sidebarStore.toggleMenu">
        <h2 v-if="!isCollapsed || !isDesktop" class="sidebar__title">Dashboard</h2>

        <IconsArrowIcon class="sidebar__arrow" />
      </div>

      <ul class="sidebar__list">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          class="menu__item"
          @mouseover="toggleHover(item.id)"
          @mouseleave="toggleHover()"
        >
          <nuxt-link
            :to="item.link"
            :class="[{ active: route.path === item.link }, 'item__link']"
            @click="toggleMenu"
          >
            <component
              :is="item.icon"
              :class="{ active: itemHover === item.id || route.path === item.link }"
            ></component>

            <span v-if="!isCollapsed || !isDesktop">{{ item.text }}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DashBoard from './Icons/DashBoard.vue'
import SettingsIcon from './Icons/SettingsIcon.vue'
import { useSidebarStore } from '~/store/sidebarStore'

const sidebarStore = useSidebarStore()
const isCollapsed = computed(() => sidebarStore.isCollapsed) // Состояние для отслеживания состояния меню
const isDesktop = computed(() => window.innerWidth > 1023)

const route = useRoute()

const itemHover = ref<number | null>(null) // Состояние для отслеживания hover на пункте меню (для замены цвета иконок)
// const isDesktop = ref<boolean>(true)

// Список пунктов меню
const menuItems = [
  { id: 1, icon: DashBoard, text: 'Главная', link: '/' },
  { id: 2, icon: SettingsIcon, text: 'Настройки', link: '/settings' }
]

// Функция для отслеживания hover на пункте меню (для замены цвета иконок)
const toggleHover = (id?: number) => {
  itemHover.value = id || null
}

const toggleMenu = () => {
  if (!isDesktop.value) {
    sidebarStore.toggleMenu()
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  height: auto;
  min-width: 230px;
  width: 230px;
  border-right: 1px solid #ccc;
  background-color: #fff;
  transition: width 0.3s ease-in-out;

  &__layout {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  &__arrow {
    transition: transform 0.3s ease-in-out;
  }

  &.collapsed {
    min-width: 102px;
    width: 102px;

    & .sidebar__arrow {
      transform: rotate(180deg);
    }
  }

  &__content {
    position: fixed;
    top: 0;
    left: 0;
    padding: 20px;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 24px;
    cursor: pointer;
  }

  &__title {
    font-weight: 700;
    color: $black;
  }

  &__list {
    @include flexColumn;
    gap: 18px;
    list-style-type: none;
    padding: 0;
  }

  &__item {
    display: flex;
    align-items: center;
  }

  .item__link {
    display: flex;
    align-items: center;
    gap: 14px;
    width: 100%;
    padding: 11px;
    border: none;
    border-radius: 8px;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    text-decoration: none;

    &.active,
    &:hover {
      color: $white;
      background-color: $purple;
    }

    &.active:hover > #Icon-Set {
      fill: #fff;
    }
  }
}

@media (max-width: 1023px) {
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    min-width: auto;
    width: 0;
    background: transparent;
    overflow: hidden;
    z-index: 1;

    &.collapsed {
      width: 80%;

      .sidebar__layout {
        right: 0;
      }
    }

    &__content {
      position: relative;
      width: 100%;
      height: 100%;
      background: $white;
      z-index: 1;
    }

    &__arrow {
      display: none;
    }
  }
}
</style>
