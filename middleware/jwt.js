const jwt = require('jsonwebtoken')
const SK =  "project-api"

const createToken = payload => jwt.sign( payload, SK )
const verifyToken = token => jwt.verify( token, SK )

module.exports = { createToken, verifyToken }