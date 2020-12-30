// Object property shorthand

const name = 'Tácio'
const userAge = 30

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)


// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock = 0, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock)

}
transaction('order', product)
transaction('order')
transaction('order', {label: 'Blue book'})