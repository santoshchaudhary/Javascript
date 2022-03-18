// First Apporach Start

//function for Inheritance
function extend(child, parent) {
	child.prototype = Object.create(parent.prototype);
	child.prototype.constructor = child;
}

// Super Class
var Mobile = function() {

}

// Prototype method
Mobile.prototype.getModel = function() {
	return this.model;
}


// Sub Class
var Samsung = function(model, price) {
	this.model = model;
	this.price = price;
}

var Sony = function(model) {
	this.model = model;
}

// Inheritance
// Second way through top function, child and parent
extend(Samsung, Mobile);
extend(Sony, Mobile);

// First way
/* Samsung.prototype = Object.create(Mobile.prototype);
Samsung.prototype.constructor = Samsung;

Sony.prototype = Object.create(Mobile.prototype);
Sony.prototype.constructor = Sony; */


var galaxy = new Samsung('Galaxy', 3000);
console.log(galaxy.getModel());

var phab2 = new Sony('Phab2');
console.log(phab2.getModel());


// First Apporach End






let PersonP = function(nm, id) {
    this.name = nm;
    this.id = id;
}
PersonP.prototype.getDetails = function() {
    return `${this.name} :: ${this.id}`;
};

let fred = new PersonP('Fred', 321);
console.log(fred.getDetails());


let EmployeeP = function(nm, id, salary) {
    PersonP.call(this, nm, id);
    this.salary = salary;
}
Object.setPrototypeOf(EmployeeP, PersonP.prototype); // extends

EmployeeP.prototype.employeeInfo = function() {
    return `${this.name} :: ${this.id} :: ${this.salary}`;
}
let marry = new EmployeeP('Marry', 23, 20000);
console.log(marry.employeeInfo());




/*
let arr = ["Akshay", "Aditiya"]
let object = {
    name: "Akshay",
    city: "New Delhi",

    getIntro: function() {
        console.log(this.name + " from " + this.city);
    }
}

let object2 = {
    name: 'Sandy',
    city: 'Mumbai',
}
// Never to this
object2.prototype = object;

console.log(object.getIntro())
console.log(object2.getIntro())
*/