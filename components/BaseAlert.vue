<template>
  <transition name="alert-transition">
    <div
      v-if="isShow"
      class="px-4 py-3 rounded absolute alert-wrapper cursor-pointer"
      :class="`bg-${type}-200 text-${type}-600`"
      @click="hide"
    >
      {{ content }}
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    type() {
      switch (this.$store.state.alert.type) {
        case 'success':
          return 'green'
        case 'error':
          return 'red'
        default:
          return 'white'
      }
    },

    content() {
      return this.$store.state.alert.content
    },

    isShow() {
      return this.$store.state.alert.isShow
    },
  },

  watch: {
    isShow() {
      setTimeout(() => this.hide(), 3000)
    },
  },

  methods: {
    hide() {
      this.$store.commit('alert/SET_IS_SHOW', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.alert-wrapper {
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.alert-transition-leave-active {
  transition: opacity 0.5s;
}

.alert-transition-enter,
.alert-transition-leave-to {
  opacity: 0;
}
</style>
