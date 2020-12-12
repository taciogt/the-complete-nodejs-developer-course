const request = require('postman-request')
const fs = require('fs')

const secrets = JSON.parse(fs.readFileSync('secrets/secrets.json'))


const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${secrets.weatherStackApiAccessKey}` +
        `&query=${latitude},${longitude}`

    request({url, json: true},
        (error, {body}) => {
            if (error) {
                callback('Unable to connect to weather service!', undefined)
            } else if (body.error) {
                callback('Unable to find location.', undefined)
            } else {
                const description = body.current.weather_descriptions[0]
                const temperature = body.current.temperature
                const apparent_temperature = body.current.feelslike
                callback(undefined, {
                    description,
                    temperature,
                    apparent_temperature,
                    message: `${description}. It is currently ${temperature} degrees out. It feels like ${apparent_temperature} degrees out.`
            })
            }
        })
}

module.exports = forecast