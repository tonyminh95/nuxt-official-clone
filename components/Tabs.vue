<script>
export default {
  data() {
    return {
      currentTab: 0,
    }
  },

  methods: {
    switchTab(index) {
      this.currentTab = index
    },
  },

  render() {
    return this.$scopedSlots.default({
      currentTab: this.currentTab,
      switchTab: this.switchTab,
    })
  },
}
</script>
