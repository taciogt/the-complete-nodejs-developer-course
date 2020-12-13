const fs = require('fs')
const http = require('http')

const secrets = JSON.parse(fs.readFileSync('../weather-app/secrets/secrets.json'))

const url = `http://api.weatherstack.com/current?access_key=${secrets.weatherStackApiAccessKey}&query=-23.5507,-46.6334`

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()