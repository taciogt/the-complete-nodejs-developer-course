console.log('Client side javascript file is loaded!')

fetch('http://localhost:3000/weather?address=sao paulo').then((response) => {
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
