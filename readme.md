Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).


Svoglimento:
MILESTONE 1:
--Creo i due imput e il bottone sul file html
--Riutilizzo il codice dell'ultimo esercizio per i calcoli del biglietto modificando le modalità di input da parte dell' utente e l'output solo in console usando il bottone per la creazione delle variabili della distanza e dell'età


MILESTONE 2:
--Creo una struttura di bozza html
FESE INPUT
--Cambio input età con un select a tre scelte e di conseguenza modifico la modalità di calcolo degli sconti
--Aggiungo l'input per il nome
--Aggiungo il bottone di reset dei campi
--Il primo bottone deve sia inviare i dati in output che rendere visibile il biglietto
FASE OUTPUT
--Creo una tabella per la visualizzazione delle info del biglietto
--Cambio la modalità di output delle info del biglietto
--Creo due numeri random (il primo a 2 cifre, il secondo a 5) carrozza e cp 
--Finisco di stilizzare