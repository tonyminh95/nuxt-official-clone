<template>
  <img :src="icon" :alt="name" class="text-green-700" />
</template>

<script>
import { ICONS as icons } from '@/constants/icons'

export default {
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(icons, value)
      },
    },
  },

  computed: {
    icon() {
      return icons[this.name]
    },
  },
}
</script>
