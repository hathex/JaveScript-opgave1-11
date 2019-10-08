let knap = document.getElementById("knap");
let teksten = document.getElementById("teksten");

knap.addEventListener('click', goreNoget);

function goreNoget(){

    teksten.style.fontStyle = "italic";

}