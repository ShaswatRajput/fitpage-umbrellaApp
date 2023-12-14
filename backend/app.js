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
        greeting: "Hello welcome to the weather app",
        routes: ` "/" - Default Home Route
        "/locations" - ( GET ) - to get all the location
        "/locations" - ( POST ) - to add a new location ({ name, latitude, longitude})
        "/locations/:id" - ( GET ) - to get a saved location by ID
        "/locations/:id" - ( PUT ) - to update a saved location by ID
        "/locations/:id" - ( DELETE ) - to delete a saved location by ID
        "/history/:id/:date" - ( GET ) - to get history weather of a location by ID amd Date
        "/weatherByName/:name" - ( GET ) - to get weather data by simply entering name of the city as params `  
    })
 })

 module.exports = app
 