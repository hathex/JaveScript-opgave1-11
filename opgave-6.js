let img2 = "./assets/images/tt2.gif";
let img1 = document.getElementById("imge");
let img3 = "./assets/images/tt1.gif";


img1.addEventListener('mouseenter', function(){ 

    img1.src = img2

 });


 img1.addEventListener('mouseleave', function(){ 

    img1.src = img3

 });