const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=2b02f451a08b57fc249556c47753422b&query=37.8267,-122.4233'

request({
    url: url,
    json: true
}, (error, response) => {
    // console.log(response.body.current)
    const temperature = response.body.current.temperature
    const apparent_temperature = response.body.current.feelslike

    console.log("It is currently " + temperature + " degrees out. It feels like " + apparent_temperature + " degrees out")
})

// Goal: Print a small forecast to the user
//
// 1. Print: "It is currently 58.55 degrees out. There is a 0% chance of rain."
// 2. Test your work!