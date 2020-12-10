const request = require('postman-request')
const fs = require('fs')

const secrets = JSON.parse(fs.readFileSync('secrets/secrets.json'))


const forecast = (latitude, longitude, callback) => {
    const weatherStackUrl = `http://api.weatherstack.com/current?access_key=${secrets.weatherStackApiAccessKey}` +
        `&query=${latitude},${longitude}`

    request({url: weatherStackUrl, json: true},
        (error, response) => {
            if (error) {
                callback('Unable to connect to weather service!', undefined)
            } else if (response.body.error) {
                callback('Unable to find location.', undefined)
            } else {
                const description = response.body.current.weather_descriptions[0]
                const temperature = response.body.current.temperature
                const apparent_temperature = response.body.current.feelslike
                callback(undefined, {
                    description: description,
                    temperature: temperature,
                    apparent_temperature: apparent_temperature,
                    message: `${description}. It is currently ${temperature} degrees out. It feels like ${apparent_temperature} degrees out.`
            })
            }
        })
}

module.exports = forecast