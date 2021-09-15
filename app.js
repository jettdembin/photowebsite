var picturesCntr = document.querySelector("#pictures-cntr");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
        var res = JSON.parse(xhttp.responseText);
        var photos = res.photos.map(function(photo) {
            return photo.src
            // var image = document.createElement('div');
            // image.innerHTML = `<img src=${item.src.orginal}>
            // `
            // res.appendChild(image);
        })
        photos.forEach(function(item) {
            var image = document.createElement('div');
            image.innerHTML = `<img src=${item.small}>
            `
            picturesCntr.appendChild(image);
        })
    }
};
xhttp.open("GET", "https://api.pexels.com/v1/search?query=surf", true);
xhttp.setRequestHeader('Authorization', '563492ad6f917000010000018a35618275544479aa4dc8840d5ce33a');
xhttp.send();
