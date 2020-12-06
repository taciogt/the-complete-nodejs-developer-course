const request = require('postman-request')
const fs = require('fs')

const secrets = JSON.parse(fs.readFileSync('secrets/secrets.json'))

const url = 'http://api.weatherstack.com/current?access_key=' +
    secrets.weatherStackApiAccessKey + '&query=37.8267,-122.4233&units=f'

request({
    url: url,
    json: true
}, (error, response) => {
    // console.log(response.body.current)
    const description = response.body.current.weather_descriptions[0]
    const temperature = response.body.current.temperature
    const apparent_temperature = response.body.current.feelslike

    console.log(description + ". It is currently " + temperature + " degrees out. It feels like " + apparent_temperature + " degrees out.")
})

// Geocoding
// Address -> Lat/Long -> Weather

// Goal: Print the lat/long for Los Angeles
//
// 1. Fire off a new request to the URL explored in browser
// 2. Have the request module parse it as JSON
// 3. Print both the latitude and longitude to the terminal
// 4. Test your work!

const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=' +
    secrets.mapBoxAccessTolen + '&limit=1'
console.log(mapBoxUrl)
request({
    url: mapBoxUrl,
    json: true
}, (error, response) => {
    console.log(response.body)
    const lat = response.body.features[0].center[1]
    const long = response.body.features[0].center[0]
    console.log('Los Angeles: Lat=' + lat + ', Long=' + long)
})