const mongoose = require('mongoose');
const { Label, Priority, Status } = require('../../utils/todo_enums');
const todoSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: 'nrajan066',
  },
  title: {
    type: String,
    default: 'Sample Todo',
  },
  description: {
    type: String,
    default: 'Complete Stack Hack on Time',
  },
  startDate: {
    type: Number,
    default: new Date().getTime(),
  },
  endDate: {
    type: Number,
    default: new Date().getTime(),
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  label: {
    type: Label,
    default: Label.SHOPPING,
  },
  status: {
    type: Status,
    default: Status.NEW,
  },
  priority: {
    type: Priority,
    default: Priority.LOW,
  },
});

const todoModel = mongoose.model('Todo', todoSchema, 'todos');

module.exports = { todoModel, todoSchema };
