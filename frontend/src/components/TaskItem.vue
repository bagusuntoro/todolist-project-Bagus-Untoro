<template>
  <div class="task-item">
    <div class="task-details">
      <p :class="{ status: task.status == 1 }">{{ task.title }}</p>
      <p class="description">{{ task.description }}</p>
      <p class="tags">Tags: {{ task.tags }}</p>
    </div>
    <div class="task-actions">
      <button
        @click="$emit('toggle-task', task)"
        :class="['status-btn', { 'incomplete': task.status == 0, 'complete': task.status == 1 }]"
      >
        {{ task.status == 1 ? 'Belum Selesai' : 'Selesaikan' }}
      </button>
      <button @click="$emit('delete-task', task)" class="delete-btn">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['task']
};
</script>
