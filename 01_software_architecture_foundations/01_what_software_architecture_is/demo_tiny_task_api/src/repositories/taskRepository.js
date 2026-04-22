const tasks = require('../data/tasks');
const Task = require('../models/task');

class TaskRepository {
  getAllTasks() {
    // In a real app, this would query a database
    return tasks.map(t => new Task(t.id, t.title, t.completed));
  }

  getTaskById(id) {
    const taskData = tasks.find(t => t.id === parseInt(id, 10));
    if (!taskData) return null;
    return new Task(taskData.id, taskData.title, taskData.completed);
  }
}

module.exports = new TaskRepository();
