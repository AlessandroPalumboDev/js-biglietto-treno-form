"use strict";

// --Riutilizzo il codice dell'ultimo esercizio per i calcoli del biglietto modificando le modalità di input da parte 
// dell' utente e l'output solo in console usando il bottone per la creazione delle variabili della distanza e 
// dell'età

// Creo variabile input nome
let eta = (document.getElementById('nome').value);

// Creo variabile del bottone #genera con evento al click
const genera = document.getElementById("genera");
genera.addEventListener('click', function () {

    // Creo variabili degli input distanza ed età inseriti dall'utente
    let km = Number(document.getElementById('km').value);
    let eta = (document.getElementById('eta').value);


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
        if (eta === ('2')) {
            prezzoBiglietto = Number(prezzoBiglietto - (prezzoBiglietto / 100 * scontoMinore));
            console.log(`Utente minorenne: Il costo del biglietto è di: ${prezzoBiglietto.toFixed(2)} €`);
        }

        // Se il valore di età è superiore a 65 modifico la variabile del prezzo del biglietto e applico lo sconto dell 40%
        else if (eta === ('3')) {
            prezzoBiglietto = Number(prezzoBiglietto - (prezzoBiglietto / 100 * scontoNonno));
            console.log(`Utente oltre i 65 anni: Il costo del biglietto è di: ${prezzoBiglietto.toFixed(2)} €`);
        }

        // Stampo prezzo del biglietto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) con sconti solo se applicabili
        else {
            console.log(`Il costo del biglietto è di: ${prezzoBiglietto.toFixed(2)} €`);
        }

    }
    // Altrimenti esce questo avviso cattivissimo
    else {
        console.log('Nei campi "Distanza in km" ed "Età in anni" puoi inserire solo numeri');
    }


});

// Creo variabile del bottone #annulla con evento al click
const annulla = document.getElementById("annulla");
annulla.addEventListener('click', function () {
    km.value = ("");
    eta === ('0'); // NON FUNZIONA!!!
    nome.value = ("");
});


// test

