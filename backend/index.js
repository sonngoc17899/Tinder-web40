const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
// const router = require('./api')
require('./repositories')

app.use(cors())
app.use(bodyParser.urlencoded({extends: true}))
// app.use(router)
app.listen(8088, ()=>{
    console.log('App running at 8088');
})
app.get("/api", (req,res)=>{
    res.send("hello world")
})
