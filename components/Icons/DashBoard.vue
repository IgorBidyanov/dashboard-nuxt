<template>
  <svg
    width="40px"
    height="40px"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <title>Dashboard</title>
      <g id="Dashboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect id="Container" x="0" y="0" width="24" height="24"></rect>
        <rect
          id="shape-1"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
        ></rect>
        <line
          id="shape-2"
          x1="4"
          y1="9"
          x2="20"
          y2="9"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        ></line>
        <line
          id="shape-3"
          x1="9"
          y1="10"
          x2="9"
          y2="20"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        ></line>
      </g>
    </g>
  </svg>
</template>

<style lang="scss" scoped>
#shape-1,
#shape-2,
#shape-3 {
  stroke: $black;
}

.active {
  #shape-1,
  #shape-2,
  #shape-3 {
    stroke: $white;
  }
}
</style>
