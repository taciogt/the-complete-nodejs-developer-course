const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '..', 'public')
const viewsPath = path.join(__dirname, '..', 'templates', 'views')
const partialsPath = path.join(__dirname, '..', 'templates', 'partials')

// Setup handlerbars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Tácio'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Weather App',
        name: 'Tácio'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Tácio',
        message: 'hope this message helps someone'
    })
})

app.get('/weather', (req, res) => {
    const locationQuery = req.query.address
    if (locationQuery === undefined) {
        return res.status(400).send({
            error: 'You must provide an address'
        })
    }
    geocode(locationQuery, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return res.status(400).send({error})
        }

        forecast(latitude, longitude, (error, {message}) => {
            if (error) {
                return res.status(400).send({error})
            }
            return res.send({
                forecast: message,
                location,
                query: locationQuery
            })
        })
    })
})

// Goal: Wire up /weather
//
// 1. Require geocode/forecast into app.js
// 2. Use the address to geocode
// 3. Use the coordinates to get forecast
// 4. Send back the real forecast and location

app.get('/products', (req, res) => {
    if (req.query.search === undefined) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query)
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help',
        name: 'Tácio',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Help',
        name: 'Tácio',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})