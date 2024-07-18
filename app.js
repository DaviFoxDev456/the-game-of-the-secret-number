// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

random = randomNumber();
kickNumber = 1;

console.log(random);

function displayText(tag, text) {
    let paragraph = document.querySelector(tag);
    paragraph.innerHTML = text; 
    responsiveVoice.speak(text, "UK English Female", {rate:1.2})
}

starterText();

function cleanInput() {
    kick = document.querySelector("input");
    kick.value = "";
}

function starterText() {
    displayText("h1", "The game of the secret number");
    displayText("p", "Chose a number between 1 and 10.");
}

function verifyKick() {
    let kick = document.querySelector("input").value;
    let wordKick = kickNumber == 1 ? "kick" : "kicks";
    let mensage = `You find out the secret number with ${kickNumber} ${wordKick}`;
    if(kick == random) {
        displayText("h1", "You won!!!");
        displayText("p", mensage);
        document.getElementById("reiniciar").removeAttribute("disabled");
        console.log(numberList);

    } else {
        cleanInput();
        if(kick > random) {
            displayText("p", "The secret number is lower.");
        }   else {
                displayText("p", "The secret number is bigger.");
            }
    }   kickNumber++;
}

function randomNumber() {
    numberList = [];
    let maxNumber = 10;
    let chosenNumber = parseInt(Math.random() * maxNumber + 1);
    let numberListSize = numberList.lenght;
    if(numberListSize == maxNumber) {
        numberList = [];
    }

    if(numberList.includes(chosenNumber)) {
        return randomNumber();
    } else {
        numberList.push(chosenNumber)
        return chosenNumber;
    }

}

function restart() {
    cleanInput();
    kickNumber = 1;
    random = randomNumber();
    starterText();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}