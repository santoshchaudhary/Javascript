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
        // const html = data.data.map(user => {
        //     return `
        //         <div class="user">
        //             <p><img src="${user.avatar}" alt="${user.first_name}"/></p>
        //             <p>Name: ${user.first_name}</p>
        //             <p>Email: ${user.email}</p>
        //         </div>
        //     `;
        // }).join('');
        // const content = document.querySelector('#app');
        // content.insertAdjacentHTML('afterbegin', html);
        
    }).catch(error => {
        console.log(error);
    })
}
postData();
