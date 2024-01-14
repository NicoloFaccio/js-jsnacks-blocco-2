//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

for (let i = 0; i < 3; i++){
    const Numbers = parseInt(prompt("inserire un numero;"))
    if (i % 2 == 0){
        console.log(Numbers)
    } else {
        console.log(Numbers+ 1)
    }
}