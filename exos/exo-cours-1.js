//------------ EXERCICE : Les variables, commentaires & types  ------------//


// 1-  Écrire un commentaire sur plusieurs lignes




//2-  Déclarez une constante "data" qui contient le nombre 3

const data = 3;




// 3 - Déclarez des variables correspondant à ces différents types & vérifiez leurs types 

// String (texte)

let prenom = "Jean";


// Number (nombres)

let age = 25;

// Boolean (booleen)

let isAdult = true;


//undefined

let test;


// Object (object)

let voiture = {toyota: "koenigsegg" , couleur: "orange"};

// Tableau

let name = ["my", "name", "jeff"]



// 4-  Déclarez trois variables sans valeur(undefined), en une ligne.

let a, b, c;



//------------ EXERCICE : Les opérateurs, chaînes  ------------//

// Déterminez ce qui est vrai ou faux.

// 1- Ce code permet d'assigner la valeur 50 000 à solde.
// Vrai ou Faux ?
// let solde = 150 000;
// solde += 50 000; 

// Faux

// 2- resultat est égal à 5.
// Vrai ou Faux ?
let resultat = 10 % 7;
// Vrai


// 3- la variable str permet-elle d'afficher le nombre de pneus dont j'ai besoin pour ma voiture ?
// Vrai ou Faux ?
let str = `J'ai besoin de $(nbPneus) pour ma voiture.`
Faux



/////////////////// rédiger un algo ///////////////////////
// écrire un algorithme permettant d’échanger les valeurs de deux variables A et B

let A = 1;
let B = 2;

console.log(A, B);
[A, B] = [B, A];

console.log(A, B);



