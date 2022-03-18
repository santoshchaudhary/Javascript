// ES6 Map methods
// .get(k), .set(k,v), .clear(), .delete(k), .has(k), .forEach(func)
// .size property

let starWars = new Map();
starWars.set('Luke', 'Mark Hamill');
starWars.set('Ham', 'Harrison Ford');
let h = starWars.get('Ham');
console.log(h); // Harrison Ford

// starWars.clear();
// starWars.delete('Ham')

// if(starWars.has('Luke')) {
//     console.log('Yes, there is a key Luke!');
// } else {
//     console.log('No, there is no key!');
// }

starWars.forEach((value, key) => {
    console.log(`${key} = ${value}`)
})

// console.log(starWars.size);


