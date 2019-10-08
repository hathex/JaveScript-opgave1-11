let knap = document.getElementById("knap");
let svar = document.getElementById("svar");
let text = "";


knap.addEventListener('click', goreNoget);

function goreNoget(){

    for(let i = 0; i < 5; i++)
    {text += "øller" + "<br/>";}

    svar.innerHTML = text;


}
