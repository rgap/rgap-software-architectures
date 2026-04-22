const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

// Define routes and map them to controller methods
router.get('/tasks', taskController.getTasks);
router.get('/tasks/:id', taskController.getTask);

module.exports = router;
