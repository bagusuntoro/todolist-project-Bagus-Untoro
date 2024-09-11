<template>
  <div class="task-input">
    <input v-model="task.title" placeholder="Task Title" @keyup.enter="addTask" />
    <textarea v-model="task.description" placeholder="Task Description" />
    <input v-model="task.tags" placeholder="Tags (comma separated)" />
    <button @click="addTask">Add Task</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: {
        title: '',
        description: '',
        tags: ''
      }
    };
  },
  methods: {
    addTask() {
      this.$emit('add-task', { ...this.task });
      this.task = { title: '', description: '', tags: '' };
    }
  }
};
</script>
