<template>
  <div class="task-view">
    <task-input @add-task="addTask" />
    <task-tabs :activeTab="activeTab" @change-tab="setTab" />
    <task-list
      :tasks="tasks"
      :activeTab="activeTab"
      @toggle-task="toggleTask"
      @delete-task="deleteTask"
    />
  </div>
</template>

<script>
import TaskInput from '../components/TaskInput.vue';
import TaskTabs from '../components/TaskTabs.vue';
import TaskList from '../components/TaskList.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    TaskInput,
    TaskTabs,
    TaskList
  },
  data() {
    return {
      activeTab: 0
    };
  },
  computed: {
    ...mapGetters(['tasks'])
  },
  methods: {
    setTab(tab) {
      this.activeTab = tab;
    },
    async addTask(task) {
      if (task.title.trim()) {
        await this.$store.dispatch('addTask', { ...task, status: 0 });
      }
    },
    async toggleTask(task) {
      await this.$store.dispatch('editTask', { ...task, status: task.status == '1' ? '0' : '1' });
    },
    async deleteTask(taskId) {
      await this.$store.dispatch('removeTask', taskId);
    }
  },
  created() {
    this.$store.dispatch('loadTasks');
  }
};
</script>


<style>
.task-view {
  padding: 20px;
  max-width: 800px;
  margin: auto;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.task-input {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.task-input input,
.task-input textarea {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.task-input input:focus,
.task-input textarea:focus {
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
  outline: none;
}

.task-input button {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.task-input button:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

.tabs {
  display: flex;
  margin-bottom: 20px;
}

.tabs button {
  padding: 12px 24px;
  border: none;
  border-radius: 8px 8px 0 0;
  background-color: #f1f1f1;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  flex: 1;
  text-align: center;
}

.tabs button.active {
  background-color: #303030;
  color: white;
}

.task-items {
  max-height: 500px;
  overflow-y: auto;
}

.task-item {
  display: flex;
  align-items: flex-start;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.task-item:hover {
  background-color: #f1f1f1;
}

.task-item p {
  margin: 0;
}

.task-item .task-details {
  flex: 1;
  margin-left: 12px;
}

.task-item .description {
  font-size: 14px;
  color: #666;
  margin: 4px 0;
}

.task-item .tags {
  font-size: 14px;
  color: #777;
  margin: 4px 0;
}

.task-actions {
  display: flex;
  gap: 8px;
}

.status-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 20px;
  background-color: #2196f3;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.status-btn:hover {
  background-color: #1976d2;
}

.delete-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 20px;
  background-color: #f44336;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-btn:hover {
  background-color: #e53935;
}

.status {
  text-decoration: line-through;
  color: gray;
}

.status-btn.incomplete {
  background-color: #4caf50;
}

.status-btn.complete {
  background-color: #9e9e9e; 
}

</style>