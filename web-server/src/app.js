const path = require('path')
const express = require('express')
const hbs = require('hbs')

// Goal: Create a partial for the footer
//
// 1. Setup the template for the footer partial "Created by Some Name"
// 2. Render the partial at the bottom of all three pages
// 3. Test your work by visiting all three pages

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
        name:'Tácio',
        message: 'hope this message helps someone'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Ushuaia'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})