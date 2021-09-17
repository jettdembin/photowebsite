var picturesCntr = document.querySelector("#pictures-cntr");
var header = document.querySelector('#header');
var form = document.querySelector('#search-form');
// form.addEventListener('submit', function(e) {
//     e.preventDefault()
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//         // Typical action to be performed when the document is ready:
//             var res = JSON.parse(xhttp.responseText);
//             var photos = res.photos.map(function(photo) {
//                 console.log(photo.src)
//                 return photo.src
//             });
//             photos.forEach(function(item) {
//                 var image = document.createElement('div');
//                 image.innerHTML = `<img src=${item.original}>
//                 `
//                 picturesCntr.appendChild(image);
//             });
//             //add random background image to header
//             // document.addEventListener('DOMContentLoaded', () => {
//             //     let randomPhoto = photos[0].small;
//             //     header.style.cssText = `background-image:url(${randomPhoto});border:10pxsolidred;`
//             // });
//         }
//    };
// });


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
        var res = JSON.parse(xhttp.responseText);
        var photos = res.photos.map(function(photo) {
            console.log(photo.src)
            return photo.src
        });
        photos.forEach(function(item) {
            var image = document.createElement('div');
            image.innerHTML = `<img src=${item.original}>
            `
            picturesCntr.appendChild(image);
        });
        //add random background image to header
        // document.addEventListener('DOMContentLoaded', () => {
        //     let randomPhoto = photos[0].small;
        //     header.style.cssText = `background-image:url(${randomPhoto});border:10pxsolidred;`
        // });
    }
};
// var textValue = document.querySelector('search-bar').value;
xhttp.open("GET", "https://api.pexels.com/v1/search?query=mountains", true);
xhttp.setRequestHeader('Authorization', '563492ad6f917000010000018a35618275544479aa4dc8840d5ce33a');
xhttp.send();
