let box = document.querySelector('.box')
let log = console.log

let myFunc = function() {
    log('1', this)
};

let myFunc2 = () => {
    log('2', this)
};

box.addEventListener('mousedown', myFunc);
box.addEventListener('mouseup', myFunc2)

// myFunc()
// myFunc.call(window)
// myFunc.call(box)