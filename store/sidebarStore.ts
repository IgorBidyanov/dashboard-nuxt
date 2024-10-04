import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
  const isCollapsed = ref<boolean>(false)

  const toggleMenu = () => {
    isCollapsed.value = !isCollapsed.value
  }

  return {
    isCollapsed,
    toggleMenu
  }
})
