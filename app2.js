function helloWorld() {
    console.log("Hello World");
}

helloWorld();

function helloName() {
    let theName = "Davi";
     console.log(`Hello, ${theName}`);
}

helloName();

function multiplyByTwo() {
    let theNumber = 3;
     console.log(theNumber * 2)
}

multiplyByTwo();

function theAverage() {
    let num1 = 2;
    let num2 = 4;
    let num3 = 7;

    let result = num1 + num2 + num3 / 3;
    console.log(parseInt(result));
}

theAverage();

function bigger() {
    let numBig1 = 2;
    let numBig2 = 5;

    if(numBig1 > numBig2) {
        console.log(`${numBig1} > ${numBig2}`);
    } else {
        console.log(`${numBig1} < ${numBig2}`);
    }
}

bigger();

function exponentiation() {
    let numExp = 4;
    let resultExp = numExp * numExp;
    console.log(resultExp);
}

exponentiation();
