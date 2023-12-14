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
        quickExample:"Try a quick weather update for your favourite city. Just add this to the url:- /weatherByName/<name of the city> ",
        route1: ` / - Default Home Route`,
        route2:`/locations - ( GET ) - to get all the location`,
        route3:`/locations - ( POST ) - to add a new location ({ name, latitude, longitude})`,
        route4:`/locations/:id - ( GET ) - to get a saved location by ID`,
        route5:`/locations/:id - ( PUT ) - to update a saved location by ID`,
        route6:`/locations/:id - ( DELETE ) - to delete a saved location by ID`,
        route7:`/history/:id/:date - ( GET ) - to get history weather of a location by ID amd Date`,
        route8:`/weatherByName/:name - ( GET ) - to get weather data by simply entering name of the city as params `,
    })
 })

 module.exports = app
 