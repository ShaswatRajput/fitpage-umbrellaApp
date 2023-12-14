const express = require("express")
const router = express.Router()
const { getWeatherData,addLocation, getLocations, getLocationByID, deleteLocationByID, updateLocationByID,getLocationWeatherHistory, getWeatherDataByName } = require("../controllers/weatherControllers")

router.route("/locations/:id").get(getLocationByID).delete(deleteLocationByID).put(updateLocationByID)
router.route("/weather/:id").get(getWeatherData)
router.route("/locations").post(addLocation).get(getLocations)
router.route("/history/:id/:date").get(getLocationWeatherHistory)
router.route("/weatherByName/:name").get(getWeatherDataByName)




module.exports = router