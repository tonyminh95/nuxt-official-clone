<template>
  <tabs>
    <div
      slot-scope="{ currentTab, switchTab }"
      class="bg-gray-700 rounded mb-8"
    >
      <div class="py-3 px-4 border-b border-gray-500">
        <span
          v-for="(tab, index) in tabs"
          :key="index"
          class="text-gray-300 px-4 cursor-pointer"
          :class="[
            currentTab === index
              ? 'text-white border-b-2 py-3 border-green-400'
              : '',
          ]"
          @click="switchTab(index)"
        >
          {{ tab }}
        </span>
      </div>

      <div><slot :name="tabs[currentTab]" /></div>
    </div>
  </tabs>
</template>

<script>
export default {
  data() {
    return {
      tabs: ['yarn', 'npm'],
    }
  },
}
</script>
