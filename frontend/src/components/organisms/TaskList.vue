<template>
  <div class="task-item">
    <Checkbox :modelValue="completed" @update:modelValue="toggleCompleted" />
    <p :class="{ completed: completed }">{{ title }}</p>
    <Button label="Delete" variant="secondary" @click="deleteTask" />
  </div>
</template>

<script>
import Checkbox from '../atoms/Checkbox.vue';
import Button from '../atoms/Button.vue';
import { mapActions } from 'vuex'; // Hanya gunakan mapActions jika diperlukan

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      required: true
    }
  },
  components: {
    Checkbox,
    Button
  },
  methods: {
    ...mapActions(['toggleTask', 'deleteTask']),
    toggleCompleted() {
      this.toggleTask(this.index);
    },
    deleteTask() {
      this.deleteTask(this.index);
    }
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
