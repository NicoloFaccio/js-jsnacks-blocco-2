//genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale

function numberRandom(max, min){
    return Math.floor(Math.random()*(max-min+1)+min)
}

let numRandom = numberRandom(1, 100)

let userRandom = 0

while (userRandom !== numRandom){
    userRandom = parseInt(prompt("Inserisci un numero tra 1 e 100;"))

    if(userRandom > numRandom){
        console.log("Il numero è troppo alto")
        alert("Il numero è troppo alto")
    } else if(userRandom < numRandom){
        console.log("Il numero è troppo basso")
        alert("Il numero è troppo basso")
    } else {
        console.log("Hai indovinato:")
    }
}