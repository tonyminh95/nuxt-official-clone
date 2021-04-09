<template>
  <div class="px-8 py-4 border-t border-gray-100 flex">
    <div class="w-1/2">
      <nuxt-link v-if="leftContent" :to="leftContent" class="flex items-center">
        <icon-arrow-left color="purple" />
        <span class="ml-4">{{ router[leftContent].displayName }}</span>
      </nuxt-link>
    </div>
    <div class="w-1/2">
      <nuxt-link
        v-if="rightContent"
        :to="rightContent"
        class="flex justify-end items-center"
      >
        <span class="mr-4">{{ router[rightContent].displayName }}</span>
        <icon-arrow-right color="purple" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { AXIOS_ROUTER as router } from '@/constants/router'

export default {
  props: {
    leftContent: {
      type: String,
      default: '',
    },

    rightContent: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      router,
    }
  },
}
</script>

<style lang="scss" scoped>
span {
  color: purple;
}
</style>
