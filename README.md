# fitpage-umbrellaApp  
This is a Collection of Weather APIs and Location Management APIs to fetch weather data for various saved locations.
These are the various routes that are present in this project:-
``
1. "/" - Default Home Route
2. "/locations" - ( GET ) - to get all the location
3. "/locations" - ( POST ) - to add a new location ({ name, latitude, longitude})
4. "/locations/:id" - ( GET ) - to get a saved location by ID
5. "/locations/:id" - ( PUT ) - to update a saved location by ID
6. "/locations/:id" - ( DELETE ) - to delete a saved location by ID
7. "/history/:id/:date" - ( GET ) - to get history weather of a location by ID amd Date
8. "/weatherByName/:name" - ( GET ) - to get weather data by simply entering name of the city as params
``

Here is the POSTMAN JSON documentation of the APIs for better understanding.
https://api.postman.com/collections/28468614-34502e35-750f-4f23-885c-e945a2a3d096?access_key=PMAT-01HHM8PYQP1YSF8BAA864QYDZ0
