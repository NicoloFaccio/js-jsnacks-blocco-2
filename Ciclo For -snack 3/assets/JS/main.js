//Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro

const num1 = [10, 20, 48, 50, 60];

const num2 = [46, 26, 98, 29, 72, 33, 67, 22, 9, 10];

let numMix;

if(num1.length > num2.length) {
    numMix = num2
} else if (num1.length < num2.length) {
    numMix = num1
}

function numberRandom(max, min){
    return Math.floor(Math.random()*(max-min+1)+min)
}

for(let i = 0; num1.length !== num2.length; i++){
    let insertNumber = numberRandom(1,100)
    numMix.push(insertNumber)
}

console.log(num1, num2)
