// Object Methods, getters, setters



var log = console.log;

let x = 7;
let obj = {
    prop1: 1979,
    get prop4() {
        return this.prop1;
    },
    set prop5(_val) {
        this.prop1 = _val;
    },
    prop2: 'Alien',
    x,
    prop3() {
        log('Called prop3');
    }
};

obj.prop3(); // Called prop3
log(obj.x); // 7
log(obj.prop4); // 1979

obj.prop5 = 1980;
log(obj.prop4); // 1980
log(obj.prop5); 




// var obj = {
//     prop1: 1979,
//     prop2: 'Alien',
//     prop3: function() {

//     }
// };