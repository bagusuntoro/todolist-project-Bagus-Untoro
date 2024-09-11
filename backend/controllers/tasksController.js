const Task = require('../models/tasks'); 

// Create a new task
const createTask = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const newTask = await Task.create({
      title,
      description,
      tags
    });
    res.status(201).json(newTask);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating task', error });
  }
};

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching tasks', error });
  }
};

// Get a single task by ID
const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching task', error });
  }
};

// Update a task by ID
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, tags, status } = req.body;
  
  try {
    const task = await Task.findByPk(id);
    if (task) {
      task.title = title || task.title;
      task.description = description || task.description;
      task.tags = tags || task.tags;
      task.status = status !== undefined ? status : task.status;

      await task.save();
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating task', error });
  }
};

// Delete a task by ID
const deleteTask = async (req, res) => {
  const { id } = req.params;
  
  try {
    const task = await Task.findByPk(id);
    if (task) {
      await task.destroy();
      res.status(200).json({ message: 'Task deleted successfully' });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error deleting task', error });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
