const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Belém', (error, data) => {
    console.log('Error:', error)
    console.log('Data:', data)
})

forecast(-23.533,-46.617, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})