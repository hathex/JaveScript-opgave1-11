let v = document.querySelector("#venstre");
let h = document.querySelector("#hoejre");
let o = document.querySelector("#op");
let n = document.querySelector("#ned");
let pm = document.querySelector("#pacman");


let tv, th, to, tn;
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
    clearTimeout(tv)
    pm.style.left = pm.offsetLeft - pmpx + "px";
    tv = setTimeout(flytVenstre, 50);
}

function flytHoejre() {
    clearTimeout(th)
    pm.style.left = pm.offsetLeft + pmpx + "px";
    th = setTimeout(flytHoejre, 50);
}

function flytOp() {
    clearTimeout(to)
    pm.style.top = pm.offsetTop - pmpx + "px";
    to = setTimeout(flytOp, 50);
}

function flytNed() {
    clearTimeout(tn)
    pm.style.top = pm.offsetTop + pmpx + "px";
    tn = setTimeout(flytNed, 50);
}