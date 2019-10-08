let seasontext = document.getElementById('seasontext');
let seasonimage = document.getElementById('seasonimage');
let img1 = "./assets/images/summer.jpg";
let img2 = "./assets/images/spring.jpg";
let img3 = "./assets/images/autumn.jpg";
let img4 = "./assets/images/winter.jpg";

var d = new Date();


var season = d.getMonth();
if (season === 1) {
    seasontext.innerText = "spring";
    seasonimage.src = img2;
} else if (season === 2) {
    seasontext.innerText = "winter";
    seasonimage.src = img4;
} else if (season === 3) {
    seasontext.innerText = "autumn";
    seasonimage.src = img3;
} else if (season === 4) {
    seasontext.innerText = "summer";
    seasonimage.src = img1;
} else {
    seasontext.innerText = "fejl";
}