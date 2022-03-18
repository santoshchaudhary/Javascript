const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

//const [a, b] = alphabet;
const [a, b, ...rest] = alphabet;
console.log(a)
console.log(b)
console.log(rest)


// Spread Operators
const newArray = [...alphabet, ...numbers]
const newArray1 = alphabet.concat(numbers);
console.log(newArray)
console.log(newArray1)



//
function sumAndMultiply(a, b) {
    return [a+b, a*b]
}
const [sum, multiply] = sumAndMultiply(2, 3)
console.log(sum, multiply)


console.log('-----------Object Destructuring----------------')

const personOne = {
    name: 'Kyle',
    age: 24,
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

const personTwo = {
    name: 'Sally',
    age: 32,
    favouriteFood: 'Watermelon',
    address: {
        city: 'Somewhere else',
        state: 'Another one of them'
    }
}

const {name, age, favouriteFood = 'Rice', address: { city } } = personTwo
console.log(name, age, favouriteFood, city)

// through function
function printUser({name, age}) {
    console.log(`Name is ${name}. Age is ${age}`)
}
printUser(personOne)