var originalString = 'abcabcabceee';
var patternString = 'abce';
// output = 'bbbeeecccaaa'
const output = originalString.split('').sort().join('');
const a = output.match(/a/g).join('');
const b = output.match(/b/g).join('');
const c = output.match(/c/g).join('');
const e = output.match(/e/g).join('');
console.log(b+e+c+a); // bbbeeecccaaa



const arry = [1, 2, 1, 3, 4, 3, 5];
const toFindDuplicates = arry => arry.filter((item, index) => arr.indexOf(item) !== index)
const duplicateElementa = tofindDuplicates(arry);
console.log(duplicateElements);
 
// remove duplicate 
let chars = ['A', 'B', 'A', 'C', 'B'];      

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);


function getUnique(arr){
    
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

// calling the function
// passing array argument
getUnique(array);



const items = [
    { name: 'Bike',     price: 100 },
    { name: 'TV',       price: 4000 },
    { name: 'Album',    price: 1020 },
    { name: 'Book',     price: 400 },
    { name: 'Phone',    price: 300 },
    { name: 'Computer', price: 10000 },
    { name: 'keyboard', price: 1000 },
    { name: 'Mouse',    price: 500 },
]
// Filter
const filteredItem = items.filter((item) => {
    return item.price <= 4000;
})
console.log(filteredItem)
// Map
const itemNames = items.map((item) => {
    return item.name;
})
console.log(itemNames)

// Find
const foundItem = items.find((item) => {
    return item.name === 'Book'
})
console.log(foundItem)

// For Each
items.forEach((item) => {
    console.log(item.price)
})

// Some
const hasinExpensiveItem = items.some((item) => {
    return item.price <= 100;
})
console.log('---------' + hasinExpensiveItem)

// Every
const hasEveryItem = items.every((item) => {
    return item.price <= 4000;
})
console.log('---------' + hasEveryItem)

// Reduce
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0)
console.log(total)

// Include
const numbers = [1,2,3,4,5,6];
const includestwo = numbers.includes(2)
console.log(includestwo);



var tempByHour = [ 59.2, 60.1, 63, 65, 62 ];

function createLi(temp, i) {
    var li = document.createElement("LI");
    
    if (i === 0) {
        li.innerText = "The temperature at noon was " + temp;
    } else {
        li.innerText = "The temperature at " + i + "was " + temp;
    }
    
    return li;
}

var i,
    len = tempByHour.length,
    target = document.getElementById("temps");

for (i = 0; i < len; i++) {
    target.appendChild(createLi(tempByHour[i], i));
}
