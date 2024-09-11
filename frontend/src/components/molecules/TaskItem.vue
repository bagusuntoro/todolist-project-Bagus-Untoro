<template>
  <div class="task-item">
    <Checkbox :modelValue="completed" @update:modelValue="$emit('toggle-completed')" />
    <p :class="{ completed: completed }">{{ title }}</p>
    <Button label="Delete" variant="secondary" @click="$emit('delete-task')" />
  </div>
</template>

<script>
import Checkbox from '../atoms/Checkbox.vue';
import Button from '../atoms/Button.vue';

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Checkbox,
    Button
  }
};
</script>

<style scoped>
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.completed {
  text-decoration: line-through;
  color: gray;
}
</style>
