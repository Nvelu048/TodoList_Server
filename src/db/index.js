const mongoose = require('mongoose');
async function connectToDB() {
  try {
    await mongoose.connect('mongodb://localhost/todo_stack_hack', {
      useNewUrlParser: true,
    });
    console.log('Successfully connected');
  } catch (e) {
    throw e;
  }
}
module.exports = {
  connectToDB,
};
