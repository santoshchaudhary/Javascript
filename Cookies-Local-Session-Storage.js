localStorage.setItem('name', 'Santosh'); // set the time
console.log(localStorage.getItem('name')) // get the item in the console
localStorage.removeItem('name') // remove the item


sessionStorage.setItem('name', 'this is session Storage!')
console.log(sessionStorage.getItem('name')) // get the item in the console
sessionStorage.removeItem('name') // remove the item


document.cookie = 'name=Santosh; expires=' + new Date(2022, 12, 12).toUTCString()
document.cookie = 'lastName=Chaudhary; expires=' + new Date(2022, 12, 12).toUTCString()
console.log(document.cookie)