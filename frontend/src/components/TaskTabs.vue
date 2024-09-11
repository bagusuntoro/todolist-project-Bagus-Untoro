<template>
  <div class="tabs">
    <button :class="{ active: activeTab === 0 }" @click="changeTab(0)">Belum Selesai</button>
    <button :class="{ active: activeTab === 1 }" @click="changeTab(1)">Sudah Selesai</button>
  </div>
</template>

<script>
export default {
  props: ['activeTab'],
  methods: {
    changeTab(tab) {
      this.$emit('change-tab', tab);
    }
  }
};
</script>
