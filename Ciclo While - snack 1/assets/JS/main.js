//Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50

const numberHtml = []

let addiction = 0

let i = 0

while(addiction < 50){
    let numberUser = parseInt(prompt("Inserisci un numero minore di 50"))

    if (numberUser > (50 - addiction)){
        alert(`Puoi ancora inserire: ${50 - addiction}`)
    } else {
        numberHtml.push(numberUser)

        addiction += numberUser[ i ]
    }

    i++
}

console.log(`La somma è: ${addiction}`, numberHtml)