const Location = require("../models/locationModel")
const mongoose = require("mongoose")


exports.addLocation = async (req,res)=>{
    try{
        const {name,latitude,longitude} = req.body
        const newLocation = await Location.create({name,latitude,longitude})
       
        res.status(201).json({
            status:"success",
            messsage:"Added Location",
            newLocation
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            status:"Failed",
            Message:`Oops! We cannot add your location. Error: ${err} `   
            })
    }
}

exports.getLocations = async(req,res)=>{
    try {
        const allLocations = await Location.find({})
        res.status(200).json({
            status:"success",
            data:allLocations
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status:"Failed",
            Message:`Wooops! We got an Error: ${error}`
        })
    }
}
exports.getLocationByID = async(req,res)=>{
       try {
       const {id} = req.params
       const idData = await Location.findById(id)
       
        if (!idData) {
            return res.status(404).json({
                status: "Failed",
                message: "No document found with the specified ID."
            });
        }
        
       
       res.status(200).json({
        status:"success",
        data:idData
       })
       } catch (error) {
        if (error instanceof mongoose.Error.CastError) {
            return res.status(400).json({
                status: "Failed",
                message: "Invalid ID. Please provide a valid Id."
            });
        }
         console.log(error)
         res.status(500).json({
             status:"Failed",
             messsage:`Doopsy Daisy!!! We encountered an Error: ${error}`
         })
       }
       
}

exports.deleteLocationByID = async(req,res)=>{
    try {
    const {id} = req.params
    const delData = await Location.findOneAndDelete({_id:id})
    if (!delData) {
        return res.status(404).json({
            status: "Failed",
            message: "No document found with the specified ID."
        });
    }
    res.status(200).json({
     status:"success",
     data:delData
    })
    } catch (error) {
        if (error instanceof mongoose.Error.CastError) {
            return res.status(400).json({
                status: "Failed",
                message: "Invalid ID. Please provide a valid Id."
            });
        }
         console.log(error)
         res.status(500).json({
             status:"Failed",
             messsage:`Doopsy Daisy!!! We encountered an Error: ${error}`
         })
    }
    
}
exports.updateLocationByID = async(req,res)=>{
    try {
    const {id} = req.params
    const {name,latitude,longitude} = req.body
    let updates = {};
    if(name){
        updates.name = name
    }
    if(longitude){
        updates.longitude = longitude
    }
    if(latitude){
        updates.latitude = latitude
    }
    const uptData = await Location.findOneAndUpdate({_id:id},updates)
    if (!uptData) {
        return res.status(404).json({
            status: "Failed",
            message: "No document found with the specified ID."
        });
    }
    res.status(200).json({
     status:"success",
     data:uptData
    })
    } catch (error) {
        
         
         if (error instanceof mongoose.Error.CastError) {
            return res.status(400).json({
                status: "Failed",
                message: "Invalid ID. Please provide a valid Id."
            });
        }
         console.log(error)
         res.status(500).json({
             status:"Failed",
             messsage:`Doopsy Daisy!!! We encountered an Error: ${error}`
         })
    }
    
}

exports.getWeatherData = async(req,res)=>{
    try {
        const {id} = req.params
        if(!id){
            throw new Error("Please proide an ID to get data")
        }
        const idData = await Location.findById(id)
       
        if (!idData) {
            return res.status(404).json({
                status: "Failed",
                message: "No location found with the specified ID."
            });
        }
        const lat = idData.latitude
        const long = idData.longitude
        const queryCoordinates = `${lat},${long}`
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${queryCoordinates}&aqi=no`);
        
        if (!response.ok) {
            throw new Error(`Weather API request failed with status ${response.status}`);
        }
        const data = await response.json();
        
        res.status(200).json({
            savedCityName:idData.name,
            cityName:data.location.name,
            temperature:data.current.temp_c,
            condition:data.current.condition.text,
            windSpeed:data.current.wind_kph,
            humidity:data.current.humidity,
            whatItFeelsLike: data.current.feelslike_c
        });
    } catch (error){
        console.error(error);
        res.status(500).send(`Oh Noo! ${error}`);
    }
}

exports.getLocationWeatherHistory = async(req,res)=>{
    try {
        const id = req.params.id;
        const date = req.params.date;
        if(!id || !date){
            throw new Error("Please proide an ID/date to get data")
        }
        const idData = await Location.findById(id)
       
        if (!idData) {
            return res.status(404).json({
                status: "Failed",
                message: "No location found with the specified ID."
            });
        }
        const lat = idData.latitude
        const long = idData.longitude
        const queryCoordinates = `${lat},${long}`
        const response = await fetch(`http://api.weatherapi.com/v1/history.json?key=${process.env.API_KEY}&q=${queryCoordinates}&dt=${date}`);
        
        if (!response.ok) {
            throw new Error(`Weather API request failed with status ${response.status}`);
        }
        const data = await response.json();
        
        res.status(200).json({
            data
        });
    } catch (error){
        console.error(error);
        res.status(500).send(`Oh Noo! ${error}`);
    }
}
exports.getWeatherDataByName = async(req,res)=>{
    try {
        const {name} = req.params
        if(!name){
            throw new Error("Please provide an name to get data")
        }
       
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${name}&aqi=no`);
        
        if (!response.ok) {
            throw new Error(`Weather API request failed with status ${response.status}`);
        }
        const data = await response.json();
        
        res.status(200).json({
        
            cityName:data.location.name,
            temperature:data.current.temp_c,
            condition:data.current.condition.text,
            windSpeed:data.current.wind_kph,
            humidity:data.current.humidity,
            whatItFeelsLike: data.current.feelslike_c
        });
    } catch (error){
        console.error(error);
        res.status(500).send(`Oh Noo! ${error}`);
    }
}