<template>
  <div class="py-4 flex">
    <div class="w-1/2">
      <a
        :href="link"
        class="flex items-center cursor-pointer hover:underline hover:outline-none"
        target="_blank"
      >
        Edit this page on GitHub
        <icon-link class="ml-2" />
      </a>
    </div>
    <div class="w-1/2 text-right">Updated at {{ now }}</div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
  },

  computed: {
    now() {
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ]
      const date = new Date()

      return `
        ${weekdays[date.getDay()]},
        ${months[date.getMonth()]}
        ${date.getDate()},
        ${date.getFullYear()}
      `
    },
  },
}
</script>
