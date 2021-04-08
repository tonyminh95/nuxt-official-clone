<template>
  <div class="bg-gray-700 p-3 rounded">
    <div><slot name="header"></slot></div>
    <div class="flex justify-between">
      <div ref="content"><slot name="body"></slot></div>
      <div class="flex items-end">
        <button
          class="border border-white rounded px-2 py-1 text-white cursor-pointer hover:bg-white hover:bg-opacity-20 focus:outline-none"
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
