const { User, Report } = require("../models");
const { compPassword } = require("../middleware/bcrypt");
const { createToken } = require("../middleware/jwt");
const axios = require("axios");
const { OAuth2Client } = require("google-auth-library");

class Controller {
  static async login(req, res, next) {
    
    try {

      let { username, password } = req.body;
      if (!username || !password)
      throw { name: "require", message: "email/password required" };
    
    let find = await User.findOne({ where: { username } });
    if (!find) throw { name: "wrong" };
    
    let compare = compPassword(password, find.password);
    console.log(find);
    if (!compare) throw { name: "wrong" };

      const payload = { id: find.id, role: find.role, username: find.username };
      const access_token = createToken(payload);

      res.status(200).json({ access_token, username: find.username, email : find.email });
    } catch (error) {
      next(error);
    }
  }



  static async register(req, res, next) {
    try {
      let { username, email, password } = req.body;
      let role = "user";

      let reg = await User.create({ username, email, password, role });
      res.status(201).json({ id: reg.id, username: reg.username });
    } catch (error) {
      next(error);
    }
  }

}

module.exports = Controller;
