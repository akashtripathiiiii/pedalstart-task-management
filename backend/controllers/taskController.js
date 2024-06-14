const Task = require('../models/Task');

exports.getTasks = (req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(error => {
            console.error('Error fetching tasks:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
};

exports.getTask = (req, res) => {
    Task.findById(req.params.id)
        .then(task => {
            if (!task) {
                return res.status(404).json({ error: 'Task not found' });
            }
            res.json(task);
        })
        .catch(error => {
            console.error('Error fetching task:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
};

exports.createTask = (req, res) => {
    const newTask = new Task(req.body);
    newTask.save()
        .then(task => res.json(task))
        .catch(error => {
            console.error('Error creating task:', error);
            res.status(400).json({ error: error.message });
        });
};

exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, dueDate, completed } = req.body;

    Task.findByIdAndUpdate(id, { title, description, dueDate, completed }, { new: true })
        .then(updatedTask => {
            if (!updatedTask) {
                return res.status(404).json({ error: 'Task not found' });
            }
            res.json(updatedTask);
        })
        .catch(error => {
            console.error('Error updating task:', error);
            res.status(400).json({ error: error.message });
        });
};

exports.deleteTask = (req, res) => {
    console.log('Delete request received for task ID:', req.params.id);
    Task.findByIdAndDelete(req.params.id)
        .then(task => {
            if (!task) {
                console.log('Task not found for ID:', req.params.id);
                return res.status(404).json({ error: 'Task not found' });
            }
            console.log('Task deleted successfully:', task);
            res.json({ message: 'Task deleted successfully' });
        })
        .catch(error => {
            console.error('Error deleting task:', error.message); // Log error message
            console.error('Stack trace:', error.stack); // Log stack trace
            res.status(500).json({ error: 'Internal Server Error', details: error.message });
        });
};
