const {Todo} = require("../models")

class TodoController {
  static async AddTodo(req, res) {
    const { name } = req.body
    console.log("mask");
    console.log(name);
  }
}

module.exports = TodoController
