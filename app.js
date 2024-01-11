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

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
