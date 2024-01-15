//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

for (let i = 0; i < 3; i++){
    
    let Numbers = parseInt(prompt("inserire un numero;"))

    if (Numbers % 2 == 0){
        console.log(Numbers)
        document.writeln(`<p>Il numero è: ${Numbers}</p>`)
    } else {
        console.log(Numbers+ 1)
        document.writeln(`<p>Il numero è: ${Numbers + 1}</p>`)
    }
}