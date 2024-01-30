// 1. Créez un tableau avec trois valeurs à l'intérieur : 5124, true, et un tableau associatif qui contient une propriété.

let monTab = [5124, true, {impots: "non-payés"}];
console.log(monTab);


// 2. Créez un tableau associatif avec trois propriétés

let monTabAsso = {
  marque: "audi", model: "r8", année: "2020"
};
console.log(monTabAsso);

//3. ajouter les éléments "orange" et "grape" au tableau suivant :

let fruits = ["apple", "banana", "cherry"];
fruits.splice(0, 0, "orange" , "grape");
console.log(fruits);

//4.  extraire les éléments "banana" et "cherry" du tableau suivant et les ajouter à un nouveau tableau:
let fruits2 = ["apple", "banana", "cherry", "date"];
console.log(fruits2);
let newFruits2Alt = fruits2.slice(1,3);
console.log(newFruits2Alt);

//5. Fusionner les tableaux suivants en un seul :
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let newarr1 = arr1.concat(arr2);
console.log(newarr1);


//6. aplatir le tableau suivant en un seul tableau, puis inverser les éléments du tableau:
let arr3 = [1, [2, 3], [4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr3.flat(4).reverse());


//7.  concaténer les éléments du tableau suivant en une chaîne de caractères séparée par des espaces
let arr4 = ["apple", "banana", "cherry", "date"];
console.log(arr4.join(" "));

// 8. Affichez à l'aide d'une boucle for.. in, toutes les valeurs des propriétés de ce tableau associatif dans la console.

const capitales = {
  autriche: "Vienne",
  argentine: "Buenos Aires",
  estonie: "Tallinn",
  australie: "Cambera",
};

for (const key in capitales) {
  console.log(capitales[key]);
}

// 9. Idem mais avec une boucle "for..of" et ce tableau.

const fruits3 = ["Fraise", "Cerise", "Orange", "Citron", "Ananas"];

for (const fruit of fruits3) {
  console.log(fruit);
}

//10. créer un tableau avec 20 nombres aléatoires entre 0 et 100 //
// Vérifier si 10 est présent dans le tableau //
// trier les nombres du tableau dans deux tableau différents //
// nombres pairs dans un tableau et nombres impairs dans un autre tableau //

let tabRandom = [];
for (let i = 0; i < 20; i++) {
  tabRandom.push(Math.floor(Math.random() * 100));
};

console.log(tabRandom);

let tabRandom2 = tabRandom.includes(10);
console.log(tabRandom2);

let tabRandom3 = tabRandom.filter((element) => element % 2 === 0);
console.log(tabRandom3);

let tabRandom4 = tabRandom.filter((element) => element % 2 !== 0);
console.log(tabRandom4);


//11. Affichez les valeurs et les clés d'un tableau avec la boucle for... of   //

const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let [key, value] of arr5.entries()) {
  console.log(`key: ${key} value: ${value}`);
}

//12. même exercice avec la boucle for...in //

for (let key in arr5){
  console.log(key);
  console.log(arr5[key]);
}



//13. afficher les pays avec plus de 10 millions d'habitants avec une boucle for in  //
const pays = {
  France: 67009988,
  Espagne: 46700000,
  Italie: 60400000,
  Allemagne: 83000000,
  RoyaumeUni: 66000000,
  Belgique: 11500000,
  Suisse: 8500000,
  Autriche: 9000000,
  Portugal: 10200000,
};

for (let key in pays ) {
  if (pays[key]>10000000){
    console.log(key);
  }
}


// 14- Créer un tableau avec 20 nombres aléatoires entre 0 et 100 //
// calculer la moyenne des nombres du tableau avec la méthode reduce //
// calculer le nombre de chiffre pairs dans le tableau avec la méthode reduce //

let tabRandom5 = [];
for (let i = 0; i < 20; i++) {
  tabRandom5.push(Math.floor(Math.random() * 100));
};
console.log(tabRandom5);

let avgTabR = tabRandom5.reduce((a, b) => a + b ,0 ) / tabRandom5.length;
console.log(avgTabR);

let tabEven = tabRandom5.reduce((a, b) => a + (b % 2 === 0), 0);
console.log(tabEven);



//15. doubler les valeurs du tableau avec la méthode map et les retrouner dans un nouveau tableau  //
let arr6 = [1, 2, 3, 4, 5];

let arr6Double = arr6.map(x => x * 2); 
console.log(arr6Double);

//16. utilser map pour transformer chaque élements du tableau en majuscule et les retrouner dans un nouveau tableau //

let arr7 = ["apple", "banana", "cherry", "date"];

let arr7Maj = arr7.map(x => x.toUpperCase());
console.log(arr7Maj);

//17. Utiliser la méthode map pour retourner dans un nouveau tableau le carré des nombres du tableau suivant et ajouter la valeur 6 à ce même tableau  //
const nombres = [1, 2, 3, 4, 5];

let arrSqr = nombres.map(x => x *x);
console.log(arrSqr);

//18. utiliser map pour créer un tableau avec les racines carrées des valeurs de l'objet //
let obj = { a: 25, b: 16, c: 9, d: 4 };

let objSqrRoot = Object.values(obj).map(x => Math.sqrt(x));
console.log(objSqrRoot);

//19. même exercice avec la méthode forEach  //

let objSqrRoot2 = [];
Object.values(obj).forEach(x => {
  objSqrRoot2.push(Math.sqrt(x));
});

console.log(objSqrRoot2);

// 20. Faire la sommes des nombre pairs
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arrEvenSum = arr.filter(w => w % 2 === 0).reduce((a, b) => a + b);
console.log(arrEvenSum);

function time(nGateaux, prep = 10, cuisson = 15) {
  let result = (prep + cuisson) * nGateaux;
  return result;
}

let chocolat = time(2);
let fraisier = time(4,20)

console.log(chocolat+ fraisier);