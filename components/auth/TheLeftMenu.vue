<template>
  <div>
    <div v-for="(menu, key, index) in menus" :key="index">
      <div v-if="key != 'introduction'" class="uppercase text-gray-400 py-2">
        {{ key }}
      </div>
      <div
        v-for="(item, itemKey, itemIndex) in menu"
        :key="itemIndex"
        class="py-2"
      >
        <NuxtLink
          :to="getLink(key, itemKey)"
          class="text-gray-700 ml-5 cursor-pointer hover:text-green-400"
        >
          {{ item }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { AUTH_LEFT_MENUS as menus } from '@/constants/auth-left-menus'

export default {
  data() {
    return {
      menus,
    }
  },

  methods: {
    getLink(key, itemKey) {
      return `auth/${key}/${itemKey}`
    },
  },
}
</script>
