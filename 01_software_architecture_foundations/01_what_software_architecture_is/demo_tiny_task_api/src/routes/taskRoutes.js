import express from 'express';
import taskController from '../controllers/taskController.js';

const router = express.Router();

// Define routes and map them to controller methods
router.get('/tasks', taskController.getTasks);
router.get('/tasks/:id', taskController.getTask);

export default router;
