let form = document.querySelector('form');
let inputs = document.querySelectorAll('input');
let p = document.querySelector('p');
form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();
    let taille = inputs[0].value;
    let poids = inputs[1].value;

    let imc = (poids / Math.pow((taille / 100), 2)).toFixed(2);
    p.innerHTML = `Votre IMC est de ${imc}`;
    
    if (imc < 18.5) {
        p.innerHTML += `, vous êtes en insuffisance pondérale`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        p.innerHTML += `, vous êtes en corpulence normale`;
    } else if (imc >= 25 && imc <= 29.9) {
        p.innerHTML += `, vous êtes en surpoids`;
    } else if (imc >= 30 && imc <= 34.9) {
        p.innerHTML += `, vous êtes en obésité modérée`;
    } else if (imc >= 35 && imc <= 39.9) {
        p.innerHTML += `, vous êtes en obésité sévère`;
    } else if (imc >= 40) {
        p.innerHTML += `, vous êtes en obésité morbide`;
    }
};