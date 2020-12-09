const request = require('postman-request')
const fs = require('fs')

const geocode = require('./utils/geocode')

const secrets = JSON.parse(fs.readFileSync('secrets/secrets.json'))

// const url = 'http://api.weatherstack.com/current?access_key=' +
//     secrets.weatherStackApiAccessKey + '&query=37.8267,-122.4233'
//
// request({
//     url: url,
//     json: true
// }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         const description = response.body.current.weather_descriptions[0]
//         const temperature = response.body.current.temperature
//         const apparent_temperature = response.body.current.feelslike
//         console.log(description + ". It is currently " + temperature + " degrees out. It feels like " + apparent_temperature + " degrees out.")
//     }
// })


geocode('Belém', (error, data) => {
    console.log('Error:', error)
    console.log('Data:', data)
})