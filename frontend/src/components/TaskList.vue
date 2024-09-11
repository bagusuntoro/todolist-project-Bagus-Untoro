<template>
  <div class="task-items">
    <task-item
      v-for="task in filteredTasks"
      :key="task.id"
      :task="task"
      @toggle-task="toggleTask"
      @delete-task="deleteTask"
    />
  </div>
</template>

<script>
import Swal from "sweetalert2";
import TaskItem from './TaskItem.vue';

export default {
  components: { TaskItem },
  props: ['tasks', 'activeTab'],
  computed: {
    filteredTasks() {
      return this.tasks.filter(task => task.status == this.activeTab);
    }
  },
  methods: {
    toggleTask(task) {
      this.$emit('toggle-task', task);
    },
    deleteTask(tasks) {
         Swal.fire({
        title: "Apakah Anda yakin?",
        text: `Data ${tasks.title} akan dihapus!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, hapus!",
        cancelButtonText: "Batal",
      }).then((result) => {
        if (result.isConfirmed) {
        // this.deleteTask(task.id)
            this.$emit('delete-task', tasks.id);
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: `Data ${tasks.title} berhasil dihapus`,
        });
        }
      });
    }
  }
};
</script>
