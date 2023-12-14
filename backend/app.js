const express = require("express")
const app = express()
const router = require("./routes/weather-routes")

 // Middlewares
 app.use(express.json())
 app.use("/",router)

 // Default Route
 app.get("/",(req,res)=>{
    res.status(200).json({
        status:"successful",
        greeting: "Hello welcome to the weather app"    
    })
 })

 module.exports = app
 