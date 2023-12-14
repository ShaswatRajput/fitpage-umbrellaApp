const express = require("express")
const app = express()
const router = require("./routes/weather-routes")

// Middlewares
app.use(express.json())
app.use("/", router)

// Default Route
app.get("/", (req, res) => {
    res.status(200).send(`<center> <h1>Welcome to the Fitpage APIs</h1>
    <div>
      <h5>Following is a list of different routes that we can use</h5>
  
      <ul>
        <li> / - Default Home Route</li>
        <li> /locations - ( GET ) - to get all the location</li>
        <li>/locations - ( POST ) - to add a new location ({ name, latitude, longitude})</li>
        <li>/locations/:id - ( GET ) - to get a saved location by ID</li>
        <li>/locations/:id - ( PUT ) - to update a saved location by ID</li>
        <li>/locations/:id - ( DELETE ) - to delete a saved location by ID</li>
        <li>/history/:id/:date - ( GET ) - to get history weather of a location by ID amd Date</li>
        <li> /weatherByName/:name - ( GET ) - to get weather data by simply entering name of the city as params</li>
      </ul>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ui_VmuFj3Cg?si=pruZYiSOaNmpfBzx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </center>`)
    // json({
    //     status: "successful",
    //     greeting: "Hello welcome to the weather app",
    //     quickExample: "Try a quick weather update for your favourite city. Just add this to the url:- /weatherByName/<name of the city> ",
    //     route1: ``,
    //     route2: ``,
    //     route3: ``,
    //     route4: ``,
    //     route5: ``,
    //     route6: ``,
    //     route7: ``,
    //     route8: ` `,
    // })
})

module.exports = app
