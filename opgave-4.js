let overskr = document.getElementById("overskrift");
let knap = document.getElementById("knap");
let startText = overskr.innerText;
let nyOver = "En ny overskrift";
console.log(startText);


knap.addEventListener('click', goreNoget);

function goreNoget(){


    if(startText === overskr.innerText) {
        overskr.innerText = "En ny overskrift";
    } else {
        overskr.innerText = startText;
    }


}