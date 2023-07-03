/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output collega questo file al tuo HTML e apri la console del browser. 
- Dovrai creare una direttiva di output per testare le variabili od i risultati delle espressioni che crei
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* We have 8 data types in Javascript. 

what are data types? 

This is the logic that can be carried out with a variable that does not cause any error. 

There are 6 main Data Types in JS 

1. Numbers - This data type is used to represent positive or negative numbers with or without decimal place. 

e.g let a = 40; 

2. String - This data type is used to represent textual data e.g let man = "Godwin"; 

3. Boolean - This data type is Binary and can only hold 2 CSSFontFeatureValuesRule, True or false. e.g let manIsSleeping = true; 

4. Null - this data type can only hold 1 sensorValue, null(empty). 

5. Undefined - this data type appears when a variable has been declared but does not contain any value. 

6. TypeOf - this data type is used to confirm what a variable has inside of it e.g 

let man = 75; 
typeof(man); 

7. Function data type executes a block of code when called. 

8. Array data type - this is used to store multiple values in a single variable 

e.g let studentsColorBooks = ["Red", "Yellow", "Green", "Orange"]; */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const name = "Godwin";
console.log(name); */
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let num1 = 12;
let num2 = 20;

let num3 = num1 + num2;
console.log(num3); */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let x = 12; */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//name = "Ezukuse";
//console.log(name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let subtration = 4 - x; 
console.log(subtraction);  */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";

console.log(name1 == name2);
console.log(name1 === name2.toLowerCase());
