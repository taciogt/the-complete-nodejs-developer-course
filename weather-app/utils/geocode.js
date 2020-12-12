const request = require('postman-request')
const fs = require('fs')

const secrets = JSON.parse(fs.readFileSync('secrets/secrets.json'))

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +
        '.json?access_token=' + secrets.mapBoxAccessTolen + '&limit=1'
    request({url, json: true},
        (error, {body: {features}}) => {
            if (error) {
                callback('Unable to connect to location service!', undefined)
            } else if (features.length === 0) {
                callback('Unable to find location. Try another search.', undefined)
            } else {
                const lat = features[0].center[1]
                const long = features[0].center[0]

                console.log('Los Angeles: Lat=' + lat + ', Long=' + long)
                callback(undefined, {
                    latitude: features[0].center[1],
                    longitude: features[0].center[0],
                    location: features[0].place_name
                })

            }
        })
}

module.exports = geocode