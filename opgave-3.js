let knap = document.getElementById("knap");
let wrap = document.getElementById("wrapper");


knap.addEventListener('click', goreNoget);

function goreNoget(){


    wrap.style.backgroundColor = "green";
    this.style.backgroundColor = "blue";
    this.style.color = "white";
    this.disabled = true;

}