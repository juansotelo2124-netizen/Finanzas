
const express = require("express")
const cors = require("cors")
const router = require("./routes/router")
const app = express()
let port = 3000
app.use(cors())
app.use("/api" , router)
app.listen(port, ()=>{
console.log(`CORRIENDO EN EL ${port}`)

})