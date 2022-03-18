// Promises


//
let p1 = () => Promise.resolve('Got the list of Users!');
let p2 = () => Promise.resolve('Got the list of tweets!');
let p3 = () => Promise.resolve('Got the Weather!');

Promise.all([
    p1(),
    p2(),
    p3()
]).then( (resultsArr) => {
    console.log(resultsArr[1]);
    console.log(resultsArr[0]);
    console.log(resultsArr[2]);
})

//
let p = new Promise((resolve, reject) => {
    let a = 1 +1;
    if(a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})
p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})


//
const userLeft = false;
const userWatchingCatMeme = false;

function watchPromise() {
    return new Promise((resolve, reject) => {
        if(userLeft) {
            reject({
                name: 'User left',
                message: ':('
            })
        } else if(userWatchingCatMeme) {
            reject({
                name: 'User watching 🐈 meme',
                message: 'Web Dev 🐈'
            })
        } else {
            resolve('Thumbs up and Subscribe!')
        }
    })
}
watchPromise().then((messages) => {
    console.log('Success ' + messages)
}).then((messages) => {
    console.log('Success ' + messages)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})


// 
const videoOne = new Promise((resolve, reject) => {
    resolve('Video one')
})
const videoTwo = new Promise((resolve, reject) => {
    resolve('Video two')
})
const videoThree = new Promise((resolve, reject) => {
    resolve('Video three')
})
Promise.all([
    videoOne,
    videoTwo,
    videoThree
]).then((messages) => {
    console.log(messages);
})

//
let a1 = Promise.reject('111');
let a2 = Promise.resolve('222');
let a3 = new Promise( (resolve, reject) => {
    // setTimeout(() => {
    //     console.log('Hello')
    // }, 2000);
    setTimeout(resolve, 1000, 3333);
});

Promise.race([a3, a1, a2])
    .then((result) => {
        console.log('Winning:', result);
    })
    .catch((result) => {
        console.log('Failed:', result);
    })