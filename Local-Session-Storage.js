document.querySelector('#myFileInput').addEventListener('change', function() {
    //console.log(this.files);
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        //console.log(reader.result)
        localStorage.setItem('recent-image', reader.result)
    })
    reader.readAsDataURL(this.files[0]);
});

document.addEventListener('DOMContentLoaded', () => {
    const recentImageDataUrl = localStorage.getItem('recent-image')
    if(recentImageDataUrl) {
        document.querySelector('#imgPreview').setAttribute('src', recentImageDataUrl)
    }
})



// JSON with local storage
const person = {
    name: "Obaseki Nosa",
    location: "Lagos",
}

window.localStorage.setItem('user', JSON.stringify(person));

console.log(localStorage.getItem('user'))
