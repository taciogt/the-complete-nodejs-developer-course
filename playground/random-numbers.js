function getRandomNumber(start, end){
    return Math.floor(Math.random() * end) + start
}

function getRandomArray(count, start, end) {
    const array = []
    for (let i = 0; i < count; i++) {
        let newElement = getRandomNumber(start, end)
        while (array.indexOf(newElement) > -1){
            newElement = getRandomNumber(start, end)
        }
        array.push(newElement)
    }
    return array.sort((a, b) => a - b)
}

for (let i = 0; i < 6; i++){
    console.log(getRandomArray(6, 1, 60).join(', '))
}
