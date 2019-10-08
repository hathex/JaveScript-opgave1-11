let knap = document.getElementById("knap");
let slagsdag = document.getElementById("slagsdag");


var d = new Date();

knap.addEventListener('click', function () {

    document.getElementById("dato").innerHTML = d;

    var day = d.getDay();
    if (day <= 4) {
        slagsdag.innerText = "Øv det er hverdag";
    } else if (day === 5) {
        slagsdag.innerText = "NÆSTEN weekend";
    } else if (day == 6, day == 7) {
        slagsdag.innerText = "Hurra - det er weekend";
    } else {
        slagsdag.innerText = "Der er sket en fejl"
    }
});