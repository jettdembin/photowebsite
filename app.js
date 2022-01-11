var picturesCntr = document.querySelector("#pictures-cntr");
var searchForm = document.querySelector('#search-form');
var navBar = document.querySelector('#nav-bar-2');
var main = document.querySelector('#main');

var x = Math.floor((Math.random() * 10) + 1);


document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
            var res = JSON.parse(xhttp.responseText);
            console.log(res);
            var random = res.photos.map(function(photo) {
                console.log(photo.src)
                return photo.src
            });
            var pic = random[x];
            var bkgrd = `no-repeat url("${pic.original}")`;
            main.style.background = bkgrd;

            random.forEach(function(item) {
                var image = document.createElement('div');
                image.innerHTML = `
                <div class="col-sm">
                    <div class="card bg-dark text-light">
                        <div class="card-body py-5">
                            <img class="img-fluid"src=${item.medium}>
                        </div>
                    </div>
                </div>`
                ;
                picturesCntr.appendChild(image);
            });
        }
    }
    var randomQuery = ['surfing', 'sand', 'forest', 'party', 'island', 'dancing', 'sports', 'mountains', 'ocean', 'stars']
    var homeImg = randomQuery[x];
    xhttp.open("GET", `https://api.pexels.com/v1/search?query=${homeImg}&per_page=10`, true);
    xhttp.setRequestHeader('Authorization', '563492ad6f917000010000018a35618275544479aa4dc8840d5ce33a');
    xhttp.send();
});


// ajax request
searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    picturesCntr.innerHTML = "";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
            var res = JSON.parse(xhttp.responseText);
            console.log(res);
            var photos = res.photos.map(function(photo) {
                console.log(photo.src)
                return photo.src
            });
                
            photos.forEach(function(item) {
                var image = document.createElement('div');
                image.innerHTML = `
                <div class="col-sm">
                    <div class="card bg-dark text-light">
                        <div class="card-body py-5">
                            <img class="img-fluid"src=${item.medium}>
                        </div>
                    </div>
                </div>`
                ;
                picturesCntr.appendChild(image);
            });
        }
    }
    var textValue = document.querySelector('#search-bar').value;
    xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue}&per_page=10`, true);
    xhttp.setRequestHeader('Authorization', '563492ad6f917000010000018a35618275544479aa4dc8840d5ce33a');
    xhttp.send();
});
