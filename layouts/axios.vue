<template>
  <div>
    <base-alert />
    <div class="px-8 mt-8">
      <nuxt />
    </div>
    <footer-redirection
      :left-content="leftContent"
      :right-content="rightContent"
    />
  </div>
</template>

<script>
import { AXIOS_ROUTER as router } from '@/constants/router'

export default {
  data() {
    return {
      router,
    }
  },

  computed: {
    leftContent() {
      return this.router[this.$route.name.split('-')[1]].previous
    },

    rightContent() {
      return this.router[this.$route.name.split('-')[1]].next
    },
  },
}
</script>
