let contador = 0;

let minCronometro = document.getElementById('minCronometro'),
    segCronometro = document.getElementById('segCronometro'),
    milCronometro = document.getElementById('milCronometro');

minCronometro.innerText = "00";
segCronometro.innerText = "00";
milCronometro.innerText = "00";
let mil = 0;
let seg = 0;
let min = 0;

function iniciar() {
    contar();
    id = setInterval(contar, 1);
    document.getElementById('btnIniciar').disabled = true;
}

function contar() {
    let mAux, sAux, milAux;
    mil++;
    if (mil >= 59) { seg++; mil = 0; }
    if (seg > 59) { min++; seg = 0; }
    if (min > 59) { min = 0; }

    if (mil < 10) { milAux = "0" + mil; } else { milAux = mil; }
    if (seg < 10) { sAux = "0" + seg; } else { sAux = seg; }
    if (min < 10) { mAux = "0" + min; } else { mAux = min; }

    // document.getElementById("hms").innerHTML = hAux + ":" + mAux + ":" + sAux;
    minCronometro.innerText = mAux;
    segCronometro.innerText = sAux;
    console.log(seg)
    console.log(mil)
    milCronometro.innerText = milAux;
}
function parar() {
    clearInterval(id);
    document.getElementById('btnIniciar').disabled = false;
}
function reiniciar() {
    clearInterval(id);
    minCronometro.innerText = "00";
    segCronometro.innerText = "00";
    milCronometro.innerText = "00";

}
