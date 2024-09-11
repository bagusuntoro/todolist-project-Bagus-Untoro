const { createTask, getAllTasks, getTaskById, updateTask, deleteTask } = require('../controllers/tasksController.js');
const { body, validationResult } = require('express-validator');
// const tasksController = require('../controllers/TestCreate.js');

const express = require("express");
const router = express.Router();

// Routes
router.post('/create-task', createTask);

router.get("/", async function (req, res, next) {
  return res.send("hello world");
});

// List all task
router.get("/list-task", getAllTasks);

// Task by id
router.get("/task-by-id/:id", getTaskById);

// Create new task
router.post("/create-task", createTask);

// Update task by id
router.post("/update-task/:id", updateTask);

// Delete task by id
router.delete("/delete-task/:id", deleteTask);

module.exports = router;
