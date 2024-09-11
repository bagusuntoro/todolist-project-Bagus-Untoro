<template>
  <input
    class="input-field"
    :placeholder="placeholder"
    :value="modelValue"
    @input="onInput"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      required: true
    }
  },
  methods: {
    onInput(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
};
</script>

<style scoped>
.input-field {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}
</style>
