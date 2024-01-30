let inputCol1 = document.querySelector('#color1');
let inputCol2 = document.querySelector('#color2');
let range = document.querySelector('#range');
let copy = document.querySelector('#copy');
let random = document.querySelector('#random');
let hexCodeDisplay1 = document.querySelector('#hex1');
let hexCodeDisplay2 = document.querySelector('#hex2');

let obj = {
    angle: 90,
    colors: ['#ab180e', '#1f17bf']
};

function hexa(){
    inputCol1.value = obj.colors[0];
    inputCol2.value = obj.colors[1];
    document.body.style.background = `linear-gradient(${obj.angle}deg, ${obj.colors[0]}, ${obj.colors[1]})`;
    hexCodeDisplay1.textContent = `#${obj.colors[0].substring(1)}`;
    hexCodeDisplay2.textContent = `#${obj.colors[1].substring(1)}`;
}

let inputCols = [...document.querySelectorAll('input[type="color"]')];

inputCols.forEach(element => {
    element.addEventListener('input', modifHexa);
});

function modifHexa(e){
    let index = inputCols.indexOf(e.target);
    obj.colors[index] = e.target.value;
    hexa();
};

//--------------------------------------------------------------

range.addEventListener('input', modifAngle);

function modifAngle(e){
    obj.angle = range.value;
    setTimeout(hexa, 50);
    document.querySelector('#angleNumber').textContent = 'Orientation: ' + obj.angle + '°';
    hexa();
};

//--------------------------------------------------------------

copy.addEventListener('click', copyHexa);

function copyHexa(){
    let input = document.createElement('input');
    input.value = document.body.style.background;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
};

//--------------------------------------------------------------

random.addEventListener('click', randomHexa);

function randomHexa(){
    console.log('Random button clicked');
    obj.colors[0] = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    obj.colors[1] = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    obj.angle = Math.floor(Math.random()*360);

    range.value = obj.angle;
    document.querySelector('#angleNumber').textContent = 'Orientation: ' + obj.angle + '°';

    setTimeout(hexa, 50);
};

//--------------------------------------------------------------




hexa();

