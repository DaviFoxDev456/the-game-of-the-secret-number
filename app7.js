let numeroTabuada = 2;
let algarismos = 1;
let numeroTabuadaInicial = 2;

while (numeroTabuada != 20) {
    numeroTabuada = numeroTabuadaInicial * algarismos;
    alert(`${numeroTabuadaInicial} * ${algarismos} = ${numeroTabuada}`);
    algarismos++;
}

numeroTabuada = 20;
algarismos = 10;