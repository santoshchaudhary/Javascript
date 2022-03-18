
let numbers = [123, 234, 432, 543, 456, 452];
let names = ['Alex', 'Bree', 'Devon', 'Riley', 'Cara'];

// Normal fucntion
let big = numbers.filter(function(item){
    return item > 300;
}).join(' ')
console.log(big);

// Arrow function
let bigA = numbers.filter( item => item > 300 ).join(' ');
console.log(bigA);


// Normal fucntion
names.forEach(function(index, item) {
    console.log(index, item);
});
// Arrow function
names.forEach( (item, index) =>  console.log(index, item))


// Anoymnous Function : no name
document.addEventListener('click', function() {
    console.log('Click');
})


// Difference Between Arrow & Normal Function : with Object
class Person {
    constructor(name) {
        this.name = name;
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow:' + this.name)
        }, 100)
    }

    printNameNormal() {
        setTimeout(function() {
            console.log('Normal Function:' + this.name)
        }, 100)
    }
}
let person = new Person('Bob');
person.printNameArrow() // Arrow:Bob
person.printNameNormal() // Normal Function:





console.log('----------------------------')



//JavaScript Function Default Parameters
function sendMessage(email, message, title="Title") {
    if(!email || !message) {
        return false;
    }
    // Fancy code to send the message 
    //title = title || '';
    title = title.toUpperCase();
    console.log(title, message, email);
    //console.log(message);
    return true;
}

sendMessage('fry@xyz.com', 'You got the raise!', 'Good News!');
sendMessage('fry@xyz.com', 'My mistake. It was Scruffy who got the raise!');










console.log('----------------------------')
//ES6 JavaScript Destructuring
let name, id, nm, num, star, planet;
let personObj = {
    name: 'Author Dent',
    id: 42,
    planet: 'Earth'
};
let personArr = ['Zaphod', 123, 'Betelgeuse'];

// [nm, num] = personArr;
// console.log(nm, num)     // output: Zaphod, 123

// [nm, ,star] = personArr;
// console.log(nm, star)   // output: Zaphod, Betelgeuse

// [nm, ...rest] = personArr;
// console.log(nm, rest.length, rest[0], rest[1]); // output: Zaphod 2 123 Betelgeuse

({name, id} = personObj);
console.log(name, id)  // output: Author Dent 42

const f = ({id, planet, name, star='Sol'}) => {
    console.log(name, id, planet, star);
}
f(personObj); // output: Author Dent 42 Earth Sol


/*

console.log('----------------------------')
// Spread .... expands an array into its elements
let beers = ['Corona', 'Heineken'];
let stuff = [22, 'Bob', true, beers];

combine(...stuff)

function combine(age, name, isStudent, beerList) {
    console.log(`${name} is ${age}`)
    let b = ['Tuborg', ...beerList, 'Freedom 35']
    b.forEach((item, index) => {
        console.log(item, index)
    })
}

*/

/*
console.log('----------------------------')

// REST ... collects multiple elements and condenses them into a single element
function myOtherFunction(name, age, ...list) {
    console.log(`${name} is ${age}`)
    list.forEach( (item, index) => {
        console.log(item, index)
    })
}
myOtherFunction('Hank', 38, beers, 'some text', stuff)

*/

