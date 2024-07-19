const router = require('express').Router()
const TodoController = require('../controllers/TodoController');
const UserController = require("../controllers/UserController");
const Authentication = require("../helpers/Authentication");
const Authorization = require('../helpers/Authorization')




router.post("/login", UserController.login)
router.post("/register", UserController.register)

router.post("/add-category", TodoController.AddTodo)
// Authentification
// router.use(Authentication)




// Authorization
// router.patch("/report/:id", Authorization, Controller.changeStatus);
// router.delete("/report/:id", Authorization, Controller.deleteReport);


module.exports = router