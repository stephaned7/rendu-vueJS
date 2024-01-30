// 1-  ecrire un algorithme qui utilise une structure conditionnelle if et qui demande à l'utilisateur son age et le classe dans une catégorie
// 0-2 ans : bébé
// 3-12 ans : enfant
// 13-18 ans : adolescent
// 19-59 ans : adulte
// 60 ans et plus : senior

let age = prompt('votre age ?');
if (age >= 0 && age <= 2){
    alert('bébé');
}
else if (age >= 3 && age <= 12) {
    alert('enfant');
}
else if (age >= 13 && age <= 18) {
    alert('adolescent');
}
else if (age >= 19 && age <= 59) {
    alert('adulte');
}
else if (age >= 60) {
    alert('senior');
}
else {
    alert('age incorrect');
}

// 2- même chose avec des switch

switch (true) {
  case age >= 0 && age <= 2:
    alert("bébé");
    break;
  case age >= 3 && age <= 12:
    alert("enfant");
    break;
  case age >= 13 && age <= 18:
    alert("adolescent");
    break;
  case age >= 19 && age <= 59:
    alert("adulte");
    break;
  case age >= 60:
    alert("senior");
    break;
  default:
    alert("age incorrect");
    break;
}

// 3- même chose avec des ternaires

let age = prompt("votre age ?");

let message =
  age >= 0 && age <= 2
    ? "Vous êtes un bébé."
    : age >= 3 && age <= 12
    ? "Vous êtes un enfant."
    : age >= 13 && age <= 18
    ? "Vous êtes un adolescent."
    : age >= 19 && age <= 59
    ? "Vous êtes un adulte."
    : age >= 60
    ? "Vous êtes un senior."
    : "Âge invalide, veuillez entrer une valeur positive.";

alert(message);

// 4- exercice avec la boucle while
// faire un programme qui demande à l'utilisateur de saisir un nombre
// tant que le nombre n'est pas compris entre 1 et 10, on lui redemande de saisir un nombre
// une fois le nombre compris entre 1 et 10, on affiche le nombre

let nombre = prompt("saisir un nombre entre 1 et 10");
while (nombre < 1 || nombre > 10) {
  nombre = prompt("saisir un nombre entre 1 et 10");
}
alert(nombre + 'GG mon reuf, ton QI est suppérieur à la température de la pièce');

// 5- exercice avec la boucle do...while
// faire un programme qui demande à l'utilisateur de saisir un nombre
// tant que le nombre n'est pas compris entre 1 et 10, on lui redemande de saisir un nombre
// une fois le nombre compris entre 1 et 10, on affiche le nombre

let nombre;
do {
  nombre = prompt("saisir un nombre entre 1 et 10");
} while (nombre < 1 || nombre > 10);
alert(nombre + 'GG mon reuf, ton QI est suppérieur à la température de la pièce');

// 6- exercice avec la boucle for
// faire un programme qui demande à l'utilisateur de saisir un nombre
// tant que le nombre n'est pas compris entre 1 et 10, on lui redemande de saisir un nombre
// une fois le nombre compris entre 1 et 10, on affiche le nombre

for (
  let nombre = prompt("saisir un nombre entre 1 et 10");
  nombre < 1 || nombre > 10;
  nombre = prompt("saisir un nombre entre 1 et 10")
) {}
alert(nombre);

// 7- exercice avec break et continue
// faire un programme qui affiche les nombres de 1 à 10
// sauf les nombres 5 et 7

for (let i = 1; i <=10; i++){
    if (i === 5 || i ===7)
    continue;
    alert(i);
}

// 8- exercice try catch throw finally
// faire un programme qui demande à l'utilisateur de saisir un nombre
// tant que le nombre n'est pas compris entre 1 et 10, on lui redemande de saisir un nombre
// une fois le nombre compris entre 1 et 10, on affiche le nombre

try {
    let nombre = prompt("saisir un nombre entre 1 et 10");
    if (nombre < 1 || nombre > 10) {
      throw "Nombre invalide";
    }
    alert(nombre);
    } catch (error) {
    alert(error);
    }


// 9- Affichez un triangle de 9 lignes de 1 à 9

for (let i = 1; i <= 9; i++) {
  let ligne = "";
  for (let j = 1; j <= i; j++) {
    ligne += j;
  }
  console.log(ligne);
}

