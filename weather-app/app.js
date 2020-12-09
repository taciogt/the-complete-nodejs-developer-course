const request = require('postman-request')
const fs = require('fs')

const secrets = JSON.parse(fs.readFileSync('secrets/secrets.json'))

const url = 'http://api.weatherstack.com/current?access_key=' +
    secrets.weatherStackApiAccessKey + '&query=37.8267,-122.4233'
// const url = 'http://api.weatherstack.com/current?access_key=' + secrets.weatherStackApiAccessKey + '&query='

request({
    url: url,
    json: true
}, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        const description = response.body.current.weather_descriptions[0]
        const temperature = response.body.current.temperature
        const apparent_temperature = response.body.current.feelslike
        console.log(description + ". It is currently " + temperature + " degrees out. It feels like " + apparent_temperature + " degrees out.")
    }
})

// Goal: Handle errors for geocoding request
//
// 1. Setup an error handler for low-lever errors
// 2. Test by disabling network request and running the app
// 3. Setup error handling for no matching results
// 4. Test by altering the search term and running the app

const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=' +
    secrets.mapBoxAccessTolen + '&limit=1'
// const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12whenever.json?access_token=' + secrets.mapBoxAccessTolen + '&limit=1'
request({url: mapBoxUrl, json: true},
    (error, response) => {
        if (error) {
            console.log('Unable to connect to location service!')
        } else if (response.body.features.length === 0) {
            console.log('Unable to find a matching location.')
        } else {
            const lat = response.body.features[0].center[1]
            const long = response.body.features[0].center[0]
            console.log('Los Angeles: Lat=' + lat + ', Long=' + long)

        }
    })