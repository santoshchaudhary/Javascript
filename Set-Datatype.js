let s = new Set()

s.add(12);
s.add('Hello')
s.add(true)
s.add('Sanvi, Class 4th')

s.forEach(function(item) {
    console.log(item);
})
console.log(s.has('Hello')) // true

console.log('----------------')

s.delete(12)
s.forEach(function(item) {
    console.log(item);
})

