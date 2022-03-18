//JavaScript Fetch with Request and Headers Objects
const url = 'http://jsonplaceholder.typicode.com/users/';
let header = new Headers();
header.append('Accept', 'application/json');
let req = new Request(url, {
    method: 'GET',
    headers: header,
    mode: 'cors'
});

fetch(req)
    .then( (res) => {
        if(res.ok) {
            return res.json();
        } else {
            throw Error('BAD HTTP request');
        }
    })
    .then( (data) => {
        console.log(data)
        const html = data.map(user => {
            return `
                <div class="users">
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>User Name:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p><strong>Geo:</strong> ${user.address.geo.lat}, ${user.address.geo.lng}</p>
                    <p>&nbsp;</p>
                </div>
            `;
        }).join('');
        const content = document.querySelector('#content');
        content.insertAdjacentHTML('afterbegin', html)
    })
    .catch( (err) => {
        console.log('Error: ', err.message)
    })










    
/*

// Fundamentals of the JavaScript fetch method for AJAX
// Got the details from Random user
const root = 'http://jsonplaceholder.typicode.com';
let id = Math.floor(Math.random() * 20) + 1;
let url = root + '/users/' + id;

console.log('FETCH', url);
// Any user ID higher than 10 will generate a 404 error
fetch( uri )
    .then( function(response) {
        return response.json();
    })
    .then( (data) => {
        console.log(data);
        let jsonData = JSON.stringify(data);
        let output = document.getElementById('output');
        output.textContent = jsonData;
    })
    .catch( (err) => {
        console.log('Error: ', err.message);
    });

*/

/*

// Fetch Data from API
function fetchData() {
    fetch('https://reqres.in/api/users')
    .then(res => {
        if(!res.ok) {
            throw Error('ERROR');
        }
        return res.json()
    }).then(data => {
        console.log(data.data);
        const html = data.data.map(user => {
            return `
                <div class="user">
                    <p><img src="${user.avatar}" alt="${user.first_name}"/></p>
                    <p>Name: ${user.first_name}</p>
                    <p>Email: ${user.email}</p>
                </div>
            `;
        }).join('');
        const content = document.querySelector('#app');
        content.insertAdjacentHTML('afterbegin', html);
        
    }).catch(error => {
        console.log(error);
    })
}
fetchData();

*/

/*
// Post Data to API
function postData() {
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            name: 'Morpheus',
            job: 'Leader'
        })
    })
    .then(res => {
        if(!res.ok) {
            throw Error('ERROR');
        }
        return res.json()
    }).then(data => {
        console.log(data);
        
    }).catch(error => {
        console.log(error);
    })
}
postData();

*/



async function getUsers() {
	let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    return data;
}

getUsers().then((response) => {
	let html = '';
   // console.log(response);
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
	container.innerHTML= html;
});