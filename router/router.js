const router = require('express').Router()
const UserController = require("../controllers/UserController");
const Authentication = require("../helpers/Authentication");
const Authorization = require('../helpers/Authorization')

let test = process.env.PORT 

router.get("/", ((req, res) => res.status(200).json({ message : PORT})))
router.post("/login", UserController.login)

router.post("/register", UserController.register)

// Authentification
// router.use(Authentication)



// Authorization
// router.patch("/report/:id", Authorization, Controller.changeStatus);
// router.delete("/report/:id", Authorization, Controller.deleteReport);


module.exports = router