// var picturesCntr = document.querySelector("#pictures-cntr");
// var header = document.querySelector('#header');
// var searchForm = document.querySelector('#search-form');
// var navBar = document.querySelector('#nav-bar-2');

// navBar.addEventListener('click', function(e) {
//     var navs = document.querySelectorAll('.hidden');
//     for (let nav of navs) {
//         nav.classList.remove('show-active');
//     }
//     e.target.classList.add('show-active');
//     if (e.target === navBar) {
//         navBar.classList.remove('show-active');
//     }
//     console.log(e.target);
// });


// // ajax request
// searchForm.addEventListener('submit', function(e) {
//     e.preventDefault();
//     picturesCntr.innerHTML = "";
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//         // Typical action to be performed when the document is ready:
//             var res = JSON.parse(xhttp.responseText);
//             console.log(res);
//             var photos = res.photos.map(function(photo) {
//                 console.log(photo.src)
//                 return photo.src
//             });
                
//             photos.forEach(function(item) {
//                 var image = document.createElement('div');
//                 image.innerHTML = `<img src=${item.medium}>
//                 `
//                 picturesCntr.appendChild(image);
//             });
//         }
//     }
//     var textValue = document.querySelector('#search-bar').value;
//     xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue}&per_page=16`, true);
//     xhttp.setRequestHeader('Authorization', '563492ad6f917000010000018a35618275544479aa4dc8840d5ce33a');
//     xhttp.send();
// });
