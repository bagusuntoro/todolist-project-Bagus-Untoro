<template>
  <button class="btn" :class="variant" @click="onClick">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Button'
    },
    variant: {
      type: String,
      default: 'primary'
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.primary {
  background-color: #4caf50;
  color: white;
}
.secondary {
  background-color: #f0f0f0;
  color: black;
}
</style>
