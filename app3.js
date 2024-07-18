let peso = 52;
let altura = 1.55;
let alturaAoQuadrado = altura * altura;
let imc = peso / alturaAoQuadrado;

starterText();

function displayText(tag, text) {
    let paragraph = document.querySelector(tag);
    paragraph.innerHTML = text; 
}

function starterText() {
    displayText("h1", "Calculadora de IMC");
    displayText("p", "Calcule o seu imc!");
}

function verifyKick() {
displayText("h1", "Your imc is...");
displayText("p", imc);
}