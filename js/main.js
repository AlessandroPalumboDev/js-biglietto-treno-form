// "use strict";

// Creo variabile del bottone #genera con evento al click
const genera = document.getElementById("genera");
genera.addEventListener('click', function () {

    // Creo variabili degli input distanza ed età inseriti dall'utente
    const km = Number(document.getElementById('km').value);
    const eta = (document.getElementById('eta').value);
    const nome = (document.getElementById('nome').value);

    // Creo variabili carrozza e cp
    let cp = Number(document.getElementById('cp').value);
    let carrozza = Number(document.getElementById('carrozza').value);

    // Creo numeri casuali per carrozza e cp
    cp = Math.floor((Math.random() * 99999) + 1);
    carrozza = Math.floor((Math.random() * 99) + 1);

    // Stampo dati fissi
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('cp').innerHTML = cp;
    document.getElementById('ap_nome_passeggero').innerHTML = nome;

    // compare biglietto al click
    document.getElementById("biglietto").classList.remove("d-none");
    document.getElementById("biglietto").classList.add("d-block");

    // --Riutilizzo il codice dell'ultimo esercizio per i calcoli del biglietto modificando le modalità di input da parte 
    // dell' utente e l'output

    // Se i dati inseriti dall'utente sono realmente numeri
    if (!isNaN(km)) {

        // Creo variabili di numeri per i calcoli degli sconti
        const scontoMinore = Number(20);
        const scontoNonno = Number(40);

        // Creo variabili di numeri per il calcolo del costo del biglietto
        const costoBiglietto = Number(0.21)

        // Definisco una variabile per fare il primo calcolo del costo del biglietto intero basandosi sul prezzo al chilometro
        let prezzoBiglietto = km * costoBiglietto;

        // Se il valore di età è inferiore a 18 modifico la variabile del prezzo del biglietto e applico lo sconto del 20%
        if (eta === ('bimbo')) {
            prezzoBiglietto = Number(prezzoBiglietto - (prezzoBiglietto / 100 * scontoMinore));
            console.log(`Utente minorenne: Il costo del biglietto è di: ${prezzoBiglietto.toFixed(2)} €`);
            document.getElementById('offerta').innerHTML = ("Sconto passeggero minorenne");
            document.getElementById('prezzo').innerHTML = (`${prezzoBiglietto.toFixed(2)} €`);
        }

        // Se il valore di età è superiore a 65 modifico la variabile del prezzo del biglietto e applico lo sconto dell 40%
        else if (eta === ('nonno')) {
            prezzoBiglietto = Number(prezzoBiglietto - (prezzoBiglietto / 100 * scontoNonno));
            console.log(`Utente oltre i 65 anni: Il costo del biglietto è di: ${prezzoBiglietto.toFixed(2)} €`);
            document.getElementById('offerta').innerHTML = ("Sconto passeggero over 65");
            document.getElementById('prezzo').innerHTML = (`${prezzoBiglietto.toFixed(2)} €`);
        }

        // Stampo prezzo del biglietto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) con sconti solo se applicabili
        else {
            console.log(`Il costo del biglietto è di: ${prezzoBiglietto.toFixed(2)} €`);
            document.getElementById('offerta').innerHTML = ("Biglietto standard");
            document.getElementById('prezzo').innerHTML = (`${prezzoBiglietto.toFixed(2)} €`);
        }

    }
    // Altrimenti esce questo avviso cattivissimo
    else {
        console.log('Nel campo "Km da percorrere" puoi inserire solo numeri');
    }
});

// Creo variabile del bottone #annulla con evento al click
const annulla = document.getElementById("annulla");
annulla.addEventListener('click', function () {
    // Ricreo variabili degli input distanza ed età inseriti dall'utente
    const km = Number(document.getElementById('km').value);
    const eta = (document.getElementById('eta').value);
    const nome = (document.getElementById('nome').value);

    // Svuoto i campi
    document.getElementById('km').value = ("");
    document.getElementById('eta').value = "vuoto";
    document.getElementById('nome').value = ("");

    // Scompare biglietto al click
    document.getElementById("biglietto").classList.remove("d-block");
    document.getElementById("biglietto").classList.add("d-none");
});



