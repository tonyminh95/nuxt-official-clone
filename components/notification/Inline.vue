<template>
  <div
    class="border-l-4 py-3 px-4 flex mb-4"
    :class="`border-${color}-400 bg-${color}-50`"
  >
    <component :is="`icon-${type}`" :color="color" class="mt-0.5"></component>
    <div class="ml-4"><slot /></div>
  </div>
</template>

<script>
import { COLORS as colors } from '@/constants/colors'

export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      colors,
    }
  },

  computed: {
    color() {
      return this.colors[this.type]
    },
  },
}
</script>
