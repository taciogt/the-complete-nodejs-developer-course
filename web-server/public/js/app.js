console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// Goal: Render content to paragraphs
//
// 1. Select the second messagem p from JavaScript
// 2. Just before fetch, render loading message and empty p
// 3. Ir error, render error
// 4. If no error, render lcoation and forecast
// 5. Test your work! Search for errors and for valid locations


weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then(({location, forecast, error}) => {
            if (error === undefined){
                messageOne.textContent = location
                messageTwo.textContent = forecast
            } else {
                messageOne.textContent = error
            }
        })
    })
})
