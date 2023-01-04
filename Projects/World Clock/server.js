const express = require("express")
const path = require("path")
const app = express()
const port = 4363

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "./templates/index.html"))
})

app.listen(port, ()=>{
    console.log(`App is listening at http://localhost:${port}`)
})