"use strict";


var arr = [10, 50, 30, 40, 10];

const sorting1 = [... new Set(arr)];
console.log(sorting1); //[10, 50, 30, 40]

const sorting = arr.filter((element, index) => {
	return arr.indexOf(element) === index
})
console.log(sorting); //[10, 50, 30, 40]

const order = arr.filter((a, b) => {
	return a - b;
});
console.log(order.sort()); // [10, 10, 30, 40, 50]


var arr1 = [
    {price: 100, product: 'Mobile'},
    {price: 200, product: 'Desktop'},
    {price: 300, product: 'Pen'},
    {price: 1000, product: 'MacBook'},
]

var newArr = arr1.find((item) => {
    return item.product.toLowerCase() === 'desktop'
})
console.log(newArr);


const arr2 = [
  {id: 1, name: 'Tom'},
  {id: 1, name: 'Tom'},
  {id: 2, name: 'Nick'},
  {id: 2, name: 'Nick'},
];

const uniqueValues = [];
const unique = arr2.filter((item) => {
	const isDuplicate = uniqueValues.includes(item.id);
	if(!isDuplicate) {
		uniqueValues.push(item.id);
		return true;
	}
});
console.log(unique);



const colors = ['red', 'blue', 'green'];
var i = 0;
const button = document.getElementById('button');
button.addEventListener('click', function(){
	i = i < colors.length - 1 ? ++i : 0
	document.querySelector('.text').style.color = colors[i];
	console.log(colors[i]);
});



function user(firstName, lastName){
	this.userDetails = {
		firstName:firstName,
		lastName:lastName,
	}
	const value  = `${firstName}, ${lastName}`
	console.log(value);
	const result = document.getElementById('result');
	result.innerHTML += `<br/>${value}`;
}

user('Mike', 'Doe');
let details = new user('John', 'Doe')



var a = {
    b:'India',
    c:'USA'
}
var b = Object.assign({}, a);
//var b = a;
b.c = "UK";
console.log(a.c); // USA
console.log(b.c); // UK


//Problem : When you execute the above piece of code, you will see the last value of i being printed each time on setTimeout callback execution. Here is the output of the above code:


//Let’s try to understand what is really happening in the above piece of code. The setTimeout function callback isn’t triggered until the for loop execution has completed. When the for loop has finished executing the value of i is 5. Now when the setTimeout call begins to execute it uses the last set value of i which is 5. Hence 5 is printed in all the setTimeout callbacks.

// setTimeout inside a For loop
for(var i = 0;i < 5; i++){
    setTimeout(function(){
        console.log(i);
    }, 3000);
}

for (var i = 1; i <= 3; i++) {
    (function(i) {
        setTimeout(function() { console.log(i); }, i * 1000);
    })(i);
}





// Sum Any Number : Start

// Question : sum(1)(2)(3)(4)..( n)()
let sum = function (a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        }
        return a;
    };
};
// let sum = (a) => (b) => b ? sum(a + b) : a;
const sumTotal = sum(1)(2)(3)(4)(5)();
console.log(sumTotal);

const message = document.querySelector(".sum");
message.classList.add("cookie-message");
message.textContent = sumTotal;
// Sum Any Number : End



// API call in different-different way

// XMLHttpRequest : Method
const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
request.onload = () => {
    // console.log(request);
    if (request.status === 200) {
        // console.log(JSON.parse(request.response));
    } else {
        // console.log(`Error ${request.status}`)
    }
};

// Fetch : Method
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        //console.log(json);
    });

// second approach
async function getUSers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    return data;
}
getUSers().then((response) => {
    // console.log(response);
    /*let html = '';
	response.forEach(user => {
	let htmlSegment = `
 			<div class="user">
 				<h6>${user.name}</h6>
				<h6>${user.email}</h6>
				<hr>
			</div>`;
		html+= htmlSegment;
	});
	let container = document.querySelector('.language');
	container.innerHTML = html; */
});








// axios - third party javascript library
axios.get("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
        //console.log(response.data);
    },
    (err) => {}
);

// Using jQuery
$(document).ready(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        type: "GET",
        success: function (result) {
            // console.log(result)
        },
        error: function (err) {
            //console.log(err)
        },
    });
});


// New Things
function calculatePrice(price, taxes=2, description='Default item price') {
    //taxes = taxes ?? 2;
   // description = description ?? "Default item price";
    const total = price + (price * taxes) / 100;
    console.log(`%c${description} with Tax:%c ${total}`, "font-weight:bold", "color:green");
}
calculatePrice(100, 2, "Book price");
calculatePrice(100, 5, "Mouse price");
calculatePrice(100);




const firstName = "Kyle";
const favoriteFood = "Rice";
const kyle = { firstName, favoriteFood };
console.log(kyle);

// Timer Check, how much code will take to execute : Start
console.time("Timer");
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
console.timeEnd("Timer");

// Timer Check, how much code will take to execute : End

// Console Error print in different way : Start
const x = 2;
if (x != 1) console.error("X is not 1");
if (x != 1) console.warn("X is not 1");
console.assert(x === 1, "X is not 1");

// Console Error print in different way : End

// Table print in Console : Start
const people = [
    { name: 'Kyle', age: 25 },
    { name: 'John', age: 22 },
    { name: 'Sally', age: 27 },
]
console.table(people);

// Table print in Console : End

document.addEventListener('click', async () => {
    const { default: printModule } = await import ("./script.js");
    printModule()
})
console.log('In the main file, Async');





// Array Method Start
const items = [
    { name: 'Bike', price: 100 },
    { name: 'Car', price: 80 },
    { name: 'TV', price: 45 },
    { name: 'Phone', price: 30 },
    { name: 'laptop', price: 75 },
    { name: 'Computer', price: 70 },
    { name: 'Mouse', price: 25 },
]

const filteredItems = items.filter((item) => {
    return item.price >= 100;
})
console.log(filteredItems);

const itemNames = items.map((item) => {
    return item.name
}) 
console.log(itemNames);

const findItem = items.find((item) => {
    return item.name === 'Mouse';
})
console.log(findItem);

items.forEach((item) => {
    console.log(item.name);
})

const hasInexpensive = items.some((item) => {
    return item.price >= 100;
})
console.log(hasInexpensive);

const hasInexpensive1 = items.every((item) => {
    return item.price <= 100;
})
console.log(hasInexpensive1);

const totalPrice = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
console.log(totalPrice);

// Array Method End

// DOM Manuplation Start
const body = document.body
const div1 = document.createElement("div");
const strong = document.createElement("strong")
div1.classList.add('hello')
strong.innerText = "Hello Div";
div1.innerHTML = "<strong>Hello World 2</strong>";
body.append(div1);
div1.append(strong);

const div2 = document.querySelector("div");
console.log(div2.textContent);
console.log(div2.innerText);

// DOM Manuplation End




let b = 10;
function abc() {
    var a = 1;
    let b = 2;
    const c = 3;

    console.log(a);
    console.log(b);
    console.log(c);
}
abc();
console.log(b);



// Function statement and Declaration are same
function a() {
    console.log("Function statement example");
}
a();

// Function Expression
var xy = function() {
    console.log("Function Expression");
};
xy();




// Map Method : Start

var arrNumber = [10, 20, 30, 40, 50]
var arrObject = [
    {price: '100', product: 'Mobile'},
    {price: '200', product: 'Desktop'},
    {price: '10', product: 'Pen'},
    {price: '1000', product: 'MacBook'},
]
var newArr = arrObject.map(function(value) {
    return value.price;
})
console.log(newArr)

// Map Method : End








// Anonymous Function
// function () {

// }

// Named Function Expression

// Difference between Parameters & Arguments ?

// First Class Function

// Arrow Function





