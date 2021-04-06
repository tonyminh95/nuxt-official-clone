<template>
  <div class="rounded bg-gray-800">
    <div class="px-4 border-b border-gray-400 text-gray-500 flex">
      <div
        v-for="(tab, tabIndex) in tabs"
        :key="tabIndex"
        class="p-2 cursor-pointer"
        :class="getActiveTabClass(tabIndex)"
        @click="switchTab(tabIndex, tab)"
      >
        {{ tab }}
      </div>
    </div>
    <div class="px-4 py-2">
      <slot :name="activeTabIdentity"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      activeTabIndex: 0,
      activeTabIdentity: this.tabs[0],
    }
  },

  methods: {
    getActiveTabClass(tabIndex) {
      return this.activeTabIndex === tabIndex
        ? 'text-white border-b border-green-400'
        : ''
    },

    switchTab(tabIndex, tab) {
      this.activeTabIndex = tabIndex
      this.activeTabIdentity = tab
    },
  },
}
</script>
