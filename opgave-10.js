let v = document.querySelector("#venstre");
let h = document.querySelector("#hoejre");
let o = document.querySelector("#op");
let n = document.querySelector("#ned");
let pm = document.querySelector("#pacman");

let pmpx = 5;


v.addEventListener("click", flytVenstre);
h.addEventListener("click", flytHoejre);
o.addEventListener("click", flytOp);
n.addEventListener("click", flytNed);


document.addEventListener("keydown", function (e) {

    e.preventDefault();

    if (e.keyCode == 39) { flytHoejre(); } 
    if (e.keyCode == 40) { flytNed(); } 
    if (e.keyCode == 37) { flytVenstre(); } 
    if (e.keyCode == 38) { flytOp(); }

});


function flytVenstre() {
    pm.style.left = pm.offsetLeft - pmpx + "px";
}
function flytHoejre() {
    pm.style.left = pm.offsetLeft + pmpx + "px";
}
function flytOp() {
    pm.style.top = pm.offsetTop - pmpx + "px";
}
function flytNed() {
    pm.style.top = pm.offsetTop + pmpx + "px";
}