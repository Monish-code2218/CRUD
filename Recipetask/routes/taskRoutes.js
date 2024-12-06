const express = require("express");
const { getTasks, createTask,getTaskByID , updateTask,deleteTask} = require("../controllers/taskController");

const router = express.Router();

// get all tasks
router.get("/", getTasks);

// create a new task
router.post("/", createTask);

// get a single task by id
router.get("/:id", getTaskByID);

// update a task
router.patch("/:id", updateTask);

// delete a task
router.delete("/:id", deleteTask);

module.exports = router;
