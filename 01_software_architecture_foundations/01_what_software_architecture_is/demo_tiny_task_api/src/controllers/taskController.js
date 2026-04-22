const taskService = require('../services/taskService');

class TaskController {
  getTasks(req, res) {
    try {
      const tasks = taskService.getTasks();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  getTask(req, res) {
    try {
      const task = taskService.getTask(req.params.id);
      res.json(task);
    } catch (error) {
      if (error.message === "Task not found") {
        return res.status(404).json({ error: error.message });
      }
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new TaskController();
