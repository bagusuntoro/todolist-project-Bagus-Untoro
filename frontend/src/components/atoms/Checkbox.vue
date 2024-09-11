<template>
  <label class="checkbox-container">
    <input type="checkbox" :value="modelValue" @change="onChange" />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    onChange() {
      this.$emit('update:modelValue', this.modelValue);
    }
  }
};
</script>

<style scoped>
.checkbox-container {
  display: inline-block;
  position: relative;
  cursor: pointer;
}
input {
  position: absolute;
  opacity: 0;
}
.checkmark {
  width: 20px;
  height: 20px;
  background-color: #ccc;
}
input:checked + .checkmark {
  background-color: #4caf50;
}
</style>
