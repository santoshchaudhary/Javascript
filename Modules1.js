import U, { printAge, printName as printUserName } from './Modules.js';
//import User from '/Modules1.js';

const user = new U('Bob', 11)
console.log(user)
printUserName(user);
printAge(user)