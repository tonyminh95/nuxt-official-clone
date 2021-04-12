<template>
  <div class="p-8">
    <p>ON THIS PAGE</p>

    <ul class="mt-4">
      <transition name="transition">
        <li
          v-for="(item, index) in menus"
          :key="index"
          class="text-gray-400 py-1.5 cursor-pointer hover:ml-4"
        >
          {{ item }}
        </li>
      </transition>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    menus() {
      return this.$store.state.sidebar.rightMenus
    },
  },
}
</script>

<style lang="scss" scoped>
.transition-leave-active {
  transition: all 5s ease-in-out;
}

.transition-enter,
.transition-leave-to {
  margin-left: 0;
}

.transition-enter-to,
.transition-leave {
  margin-left: 1rem;
}
</style>
