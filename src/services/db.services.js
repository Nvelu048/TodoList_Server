const { todoModel, todoSchema } = require('../db/model');

async function fetchTodos(userId) {
  try {
    let fetchResult = await todoModel.find({
      $and: [
        {
          userId: userId,
          deleted: false,
        },
      ],
    });
    return fetchResult;
  } catch (e) {
    throw e;
  }
}

async function deleteTodo(todoId) {
  try {
    let deleteStatus = await updateTodo(todoId, {
      deleted: true,
    });
    return deleteStatus;
  } catch (e) {
    throw e;
  }
}

async function updateTodo(todoId, updateObject) {
  try {
    let todos = await todoModel.findByIdAndUpdate(
      { _id: todoId },
      updateObject,
      {
        new: true,
      }
    );
    return todos;
  } catch (e) {
    throw e;
  }
}

async function createTodo(todoItem) {
  try {
    let todo = new todoModel(todoItem);
    let result = await todo.save();
    return result;
  } catch (e) {
    throw e;
  }
}
// Condition Object must include userId and deleted flag set to false
async function filterByCondition(filterCondition) {
  try {
    let result = await todoModel.find({
      $and: [{ ...filterCondition, deleted: false }],
    });
    return result;
  } catch (e) {
    throw e;
  }
}
module.exports = {
  fetchTodos,
  deleteTodo,
  updateTodo,
  createTodo,
  filterByCondition,
};
