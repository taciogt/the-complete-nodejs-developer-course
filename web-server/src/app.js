const path = require('path')
const express = require('express')
const hbs = require('hbs')

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

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help',
        name:'Tácio',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Help',
        name:'Tácio',
        errorMessage: 'Page not found'
    })
})

// Goal: Create and render a 404 page with handlebars
//
// 1. Setup the template to render the header and footer
// 2. Setup the template to render an error message in paragraph
// 3. Render the template for both 404 routes
//    - Page not found
//    - Help article not found
// 4. Test your work. Visit /what and /help/units


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})