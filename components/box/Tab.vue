<template>
  <div class="bg-gray-700 py-3 px-4 rounded mb-4">
    <div
      v-for="(tab, tabIndex) in tabs"
      :key="tabIndex"
      class="p-2 cursor-pointer"
    >
      {{ tab }}
    </div>
    <div class="flex justify-between py-2">
      <div ref="content">
        <slot :name="tab" />
      </div>
      <div class="relative">
        <button
          class="-bottom-1 border border-white rounded px-2 py-1 text-white opacity-50 cursor-pointer hover:bg-white hover:bg-opacity-20 hover:opacity-100 focus:outline-none absolute right-0"
          @click.prevent="copyTestingCode"
        >
          COPY
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ['yarn', 'npm'],
    }
  },

  methods: {
    copyTestingCode() {
      const element = document.createElement('textarea')
      element.value = this.$refs.content.textContent
      document.body.appendChild(element)
      element.select()

      try {
        document.execCommand('copy')

        this.$store.dispatch('alert/show', {
          type: 'success',
          content: 'Copied',
        })
      } catch (err) {
        this.$store.dispatch('alert/show', {
          type: 'error',
          content: 'Unable to copy',
        })
      }

      /* unselect the range */
      document.body.removeChild(element)
      window.getSelection().removeAllRanges()
    },
  },
}
</script>
