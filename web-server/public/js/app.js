console.log('Client side javascript file is loaded!')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

fetch('http://localhost:3000/weather?address=Boston').then((response) => {
    console.log(response)
    response.json().then(({location, forecast, error}) => {
        if (error === undefined){
            console.log('Location:', location)
            console.log('Forecast:', forecast)
        } else {
            console.log('Error:', error)
        }
    })
})

// Goal: Fetch weather!
//
// 1. Setup a call to fetch weather for Boston
// 2. Get the parse JSON response
//    - If error property, print error
//    - If no error property, print location an forecast
// 3. Refresh the browser and test your work