import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const API_URL = process.env.VUE_APP_BASE_API;

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    UPDATE_TASK(state, updatedTask) {
      const index = state.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        Vue.set(state.tasks, index, updatedTask);
      }
    },
    DELETE_TASK(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    }
  },
  actions: {
    async loadTasks({ commit }) {
      try {
        const response = await axios.get(`${API_URL}/list-task`);
        commit('SET_TASKS', response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },
    async addTask({ commit }, newTask) {
      try {
        const response = await axios.post(`${API_URL}/create-task`, newTask);
        commit('ADD_TASK', response.data);
      } catch (error) {
        console.error('Error creating task:', error);
      }
    },
    async editTask({ commit }, updatedTask) {
      try {
        const response = await axios.post(`${API_URL}/update-task/${updatedTask.id}`, updatedTask);
        commit('UPDATE_TASK', response.data);
      } catch (error) {
        console.error('Error updating task:', error);
      }
    },
    async removeTask({ commit }, taskId) {
      try {
        await axios.delete(`${API_URL}/delete-task/${taskId}`);
        commit('DELETE_TASK', taskId);
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    }
  },
  getters: {
    tasks: state => state.tasks
  }
});
