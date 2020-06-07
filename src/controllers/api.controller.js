const {
  fetchTodos,
  deleteTodo,
  createTodo,
  updateTodo,
  filterByCondition,
} = require('../services/db.services');

const api = require('express').Router();

api.get('/fetchTodos', async (req, res) => {
  try {
    let todos = await fetchTodos(req.query.userId);
    res.json({
      status: 200,
      data: todos,
    });
  } catch (e) {
    res.json({
      status: 500,
      message: e,
    });
  }
});

api.delete('/deleteTodo', async (req, res) => {
  try {
    let todos = await deleteTodo(req.query.todoId);
    res.json({
      status: 200,
      data: todos,
    });
  } catch (e) {
    res.json({
      status: 500,
      message: e,
    });
  }
});

api.post('/createTodo', async (req, res) => {
  try {
    let todos = await createTodo(req.body.todoData);
    res.json({
      status: 200,
      data: todos,
    });
  } catch (e) {
    res.json({
      status: 500,
      message: e,
    });
  }
});

api.post('/updateTodo', async (req, res) => {
  try {
    let todos = await updateTodo(req.body.todoId, req.body.updateObject);
    res.json({
      status: 200,
      data: todos,
    });
  } catch (e) {
    res.json({
      status: 500,
      message: e,
    });
  }
});

api.post('/filterTodos', async (req, res) => {
  try {
    let todos = await filterByCondition(req.body.filterCondition);
    res.json({
      status: 200,
      data: todos,
    });
  } catch (e) {
    res.json({
      status: 500,
      message: e,
    });
  }
});

module.exports = api;
