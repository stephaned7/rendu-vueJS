let repResult =document.querySelector('#repResult') ;
let rep = document.querySelector('#rep');
let images = document.querySelectorAll('img');
let score = document.querySelector('#score');
let arbitre = document.querySelector('#arbitre');
let button = document.querySelector('#reset')
let scoreUtil = 0;
let scoreOrdi = 0;
let endGame = false;




images.forEach(img => {
    img.addEventListener('click',respon)
}); 

button.addEventListener('click', reset)


function respon(e) {
    if(!endGame){
let user = e.target.id;
let PFC=["pierre","feuille","ciseaux"];
let ordi=Math.floor(Math.random()*PFC.length);

rep.innerHTML="vous avez choisi "+user+" et le robot a choisi "+PFC[ordi];
        if (user === PFC[ordi]) {
            repResult.innerHTML = "Match nul !";
            repResult.style.color = 'grey';
        }
        else if ((user === "pierre" && PFC[ordi] === "ciseaux") ||
            (user === "feuille" && PFC[ordi] === "pierre") ||
            (user === "ciseaux" && PFC[ordi] === "feuille")) {
            repResult.innerHTML = "manche <strong>gagnée</strong>";
            repResult.style.color = 'green';
            scoreUtil++;
        } else {
            repResult.innerHTML = "manche <strong>perdue</strong>";
            repResult.style.color = 'red';
            scoreOrdi++;
        }
    score.innerHTML = 'votre score est de '+scoreUtil+
    ' et le score de l\'ordi est de '+scoreOrdi;

    if(scoreUtil === 5 || scoreOrdi === 5){ 
        arbitre.innerHTML= "<img src='arbitre.jfif' alt='arbitre'><br>c'est finiiiiiiiii !<br>";
        arbitre.innerHTML+=(scoreUtil ===5)?"vous avez Gagné":"vous avez perdu"; 
        endGame = true;
        button.style.display='block';
    };

}};
function reset(){
    scoreOrdi=0 
    scoreUtil=0
    endGame = false 
    arbitre.innerHTML=""
    repResult.innerHTML=""
    rep.innerHTML=""
    score.innerHTML=""
    button.style.display='none'
};