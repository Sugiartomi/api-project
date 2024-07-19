const { User } = require("../models")
const { compPassword } = require("../middleware/bcrypt")
const { createToken } = require("../middleware/jwt")
const axios = require("axios")
const { OAuth2Client } = require("google-auth-library")

class Controller {
  static async login(req, res, next) {
    console.log("masuk")
    try {
      let { username, password } = req.body

      console.log(username, password)

      if (!username || !password)
        throw { name: "require", message: "email/password required" }

      let find = await User.findOne({ where: { username } })
      if (!find) throw { name: "wrong", message : "input your email/password correctly"  }

      let compare = compPassword(password, find.password)
      console.log(find)
      if (!compare) throw { name: "wrong", message : "input your email/password correctly" }

      const payload = { id: find.id, role: find.role, username: find.username }
      const access_token = createToken(payload)

      res
        .status(200)
        .json({ access_token, username: find.username, email: find.email, role: find.role })
    } catch (error) {
      console.log(error);
      if (error.name === "require" || error.name === "wrong") {
        res.status(400).json({ message: error.message })
      } else {
        res.status(500).json({ message: "INTERNAL SERVER ERROR" })
      }
    }
  }

  static async register(req, res, next) {
    try {
      let { username, email, password } = req.body
      let role = "user"

      let reg = await User.create({ username, email, password, role })
      res.status(201).json({ id: reg.id, username: reg.username })
    } catch (error) {
      res.status(400).json(error)
    }
  }
}

module.exports = Controller
