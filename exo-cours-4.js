//1.En utilisant une regex, trouver toutes les occurrences de nombres dans une chaîne de caractères :
let str = "Il y a 10 pommes et 5 bananes.";

let regex = /\d+/g;
let result = str.match(regex);
console.log(result);

// 2.En utilisant une regex vérifier si les adresses e-mail suivantes sont valides :
// Pour se faire vous devrez découper votre regex en 3 parties :
// avant le @ : 1 ou plusieurs caractères alphanumériques ou "." ou "_" ou "-"
// après le @ : 1 ou plusieurs caractères alphanumériques ou "." ou "_" ou "-"
// après le . : 2 caractères ou plus
// Afin de signifier le début et la fin de la chaîne, vous devrez utiliser les caractères spéciaux "^" et "$".
const email1 = "john.doe@gmail.com";
const email2 = "jane@gmail";

let regex2 = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
console.log(regex2.test(email1));

let regex3 = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
console.log(regex3.test(email2));

// 3. En utilisant une regex, remplacer "Bonjour" par "hello"
let str2 = "Bonjour tout le monde !";

let regex4 = /Bonjour/g;
let result2 = str2.replace(regex4, "hello");
console.log(result2);

// 4. En utilisant une regex, remplacer les nombres par leur carré :
let str3 = "Les carrés des nombres de 1 à 5 sont : 1, 4, 9, 16, 25.";

let regex5 = /\d+/g;
let result3 = str3.replace(regex5, (x) => x * x);
console.log(result3);

// 5. Écrire une fonction pure qui sert à multiplier deux nombres ensemble.

function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 3));

// 6. Créez une fonction flêchée qui retourne "Hello World", elle doit être écrite dans sa syntaxe la plus courte possible.(élégante)

let hello = () => "Hello World";
console.log(hello());

//7- Ecricre une fonction qui inverse les valeurs passées en paramètres

function reverse(a, b) {
  return [a, b].reverse();
}
console.log(reverse(5, 3));

//8-  Ecricre une fonction recursive qui renvoi la factorielle d'un nombre

function factorielle(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorielle(n - 1);
}

console.log(factorielle(6));

// 9-  Écrire une fonction d'ordre supérieur, qui prend une fonction callback en paramètre et un tableau rempli de nombres.
//   Cette fonction retournera un nouveau tableau, qui contient toutes les valeurs auxquelles on a ajouté 1

let tab = [1, 2, 3, 4, 5];

function addOne(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}
console.log(
  addOne(tab, function (el) {
    return el + 1;
  })
);

//10-  fonction qui renvoi tous les nombres premiers entre deux nombres
// un nombre premier est un nombre qui n'est divisible que par 1 et par lui même

function isPrime(num) {
  if (num === 0 || num === 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function premier(nombre1, nombre2) {
  let primeArray = [];

  for (let i = nombre1; i <= nombre2; i++) {
    if (i <= 1) {
      continue;
    } else if (i === 2) {
      primeArray.push(i);
    } else {
      for (let j = 2; j <= i; j++) {
        if (j === i) {
          primeArray.push(i);
        } else if (i % j === 0) {
          break;
        }
      }
    }
  }

  console.log(primeArray);
}

// 11-  fonction qui calcule et renvoie le PGCD de deux nombres entiers positifs
// Rappel : Le PGCD de a et b est le plus grand nombre qui est un diviseur à la fois de a et de b.

function pgcd(a, b) {
  if (b === 0) {
    return a;
  }
  return pgcd(b, a % b);
}

//12-  Ecrire une fonction récursive qui demande un nombre de départ, et qui calcule la somme des entiers jusqu’à
// ce nombre. Par exemple, si l’on entre 5, le programme doit calculer 1 + 2 + 3 + 4 + 5 = 15.:

function sum(n) {
  if (n === 0) {
    return 0;
  }
  return n + sum(n - 1);
}

//13-   Créer une fonction abracadabra qui ne contiendra aucun paramètre.
// Demander le prénom, le nom et l'age de notre utilisateur grâce à une boîte de dialogue.
// Afficher, toujours grâce à une boîte de dialogue, la phrase "Sapristi ! On ne m'avait pas prévenu que c'était vous, [prenom] ! Euh... Je veux dire... Monsieur le grand magicien [nom] ! Cela fait déjà [age] ans que vous faites rayonner notre contrée !".

function abracadabra() {
  let prenom = prompt("Quel est votre prénom ?");
  let nom = prompt("Quel est votre nom ?");
  let age = prompt("Quel est votre age ?");
  alert(
    `Sapristi ! On ne m'avait pas prévenu que c'était vous, ${prenom} ! Euh... Je veux dire... Monsieur le grand magicien ${nom} ! Cela fait déjà ${age} ans que vous faites rayonner notre contrée !`
  );
}

//14-  Realisez un programme premettant de calculer l'IMC (Indice de Masse Corporelle) en utilisant une fonction. et en demandant à l'utilisateur son poids et sa taille.

function imc() {
  let poids = prompt("Quel est votre poids ?");
  let taille = prompt("Quel est votre taille ?");
  let imc = poids / (taille * taille);
  alert(`Votre IMC est de ${imc}`);
}

// 15. rédigrez un programme qui permette de créer une calculatrice, pour se faire vous commencerez par demander à l'utilisateur un choix entre les opérations suivantes : addition, multiplication, soustraction, division. Ensuite vous demanderez à l'utilisateur de saisir deux nombres puis  et enfin vous afficherez le résultat de l'opération choisie.

function calculatrice() {
  let choix = prompt(
    "Quelle opération souhaitez-vous faire ? addition, multiplication, soustraction, division"
  );
  let nb1 = prompt("Quel est votre premier nombre ?");
  let nb2 = prompt("Quel est votre deuxième nombre ?");
  if (choix === "addition") {
    alert(`Le résultat de votre addition est ${nb1 + nb2}`);
  } else if (choix === "multiplication") {
    alert(`Le résultat de votre multiplication est ${nb1 * nb2}`);
  } else if (choix === "soustraction") {
    alert(`Le résultat de votre soustraction est ${nb1 - nb2}`);
  } else if (choix === "division") {
    alert(`Le résultat de votre division est ${nb1 / nb2}`);
  } else {
    alert("Mec choisis un truc??");
  }
}

//16 . Ecrire un programme qui permette de déterminer si un mot est un palindrome(un mot qui peut se lire dans les deux sens) Par exemple : radar, kayak, elle, ressasser, etc.

function palindrome() {
  let mot = prompt("Quel est votre mot ?");
  let motReverse = mot.split("").reverse().join("");
  if (mot === motReverse) {
    alert("C'est un palindrome");
  } else {
    alert("Ce n'est pas un palindrome");
  }
}

// 17. Sur le modèle de la méthode filter(),  créez une fonction customFilter() qui prend un paramètre un tableau et une fonction callBack().
// Votre fonction customFilter() devra parcourir le tableau et pousser l’élément courant dans un autre tableau si le critère est rempli
// La fonction callBack() contiendra la condition à remplir pour filtrer.

function customFilter(arr, callBack) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
