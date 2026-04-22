const taskRepository = require('../repositories/taskRepository');

class TaskService {
  getTasks() {
    // Business logic goes here (e.g., filtering, logging)
    return taskRepository.getAllTasks();
  }

  getTask(id) {
    const task = taskRepository.getTaskById(id);
    if (!task) {
      throw new Error("Task not found");
    }
    return task;
  }
}

module.exports = new TaskService();
