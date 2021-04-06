<template>
  <div
    class="px-5 py-4 border-l-4 flex items-start"
    :class="`bg-${color}-50 border-${color}-200 text-${color}-700`"
  >
    <div>
      <BaseIcon name="information" class="w-4 h-4" />
    </div>
    <div><slot></slot></div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
  },
}
</script>
