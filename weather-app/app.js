const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Goal: Accept location via command line argument
//
// 1. Access the command line argument without yargs
// 2. Use the string value as the input for geocode
// 3. Only geocode if a location was provided
// 4. Test your work with a couple locations

const locationQuery = process.argv[2]
if (locationQuery !== undefined) {
    geocode(locationQuery, (error, data) => {
        if (error) {
            return console.log(error)
        }

        forecast(data.latitude, data.longitude, (error, forecaseData) => {
            if (error) {
                return console.log(error)
            }

            console.log(data.location)
            console.log(forecaseData.message)
        })
    })
} else {
    console.log('No location provided!')
}


