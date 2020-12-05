const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=2b02f451a08b57fc249556c47753422b&query=37.8267,-122.4233'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)

})