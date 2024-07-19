if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}


const express = require("express")
const cors = require("cors")
const router = require("./router/router")

const app = express()
const port = process.env.PORT || 8001

console.log(process.env.PORT);

app.use(cors())  
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get("/", ((req, res) => {
  try {
    res.status(200).json({port, message : "Service On!", ENV : process.env.NODE_ENV})
  } catch (error) {
    res.send(error)
  }
}))
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}  Service On ENV ==> ${process.env.NODE_ENV}`)
})
