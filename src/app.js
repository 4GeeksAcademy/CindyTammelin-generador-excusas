import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let who = ['El perro', 'Mi abuelo', 'El hombre', 'Mi cabra'];
  let action = ['corre', 'come', 'salta', 'rompe'];
  let what = ['mi tarea', 'mi celular', 'mi carro'];
  let when = ['despues de clases', 'cuando duermo', 'mientras hago ejercicio', 'mientras almuerzo', 'mientras estoy comiendo'];

  function getRandomElement(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  function generateExcuse() {
    let randomWho = getRandomElement(who);
    let randomAction = getRandomElement(action);
    let randomWhat = getRandomElement(what);
    let randomWhen = getRandomElement(when);

    let excuse = randomWho + ' ' + randomAction + ' ' + randomWhat + ' ' + randomWhen + '.';

    const excuseElement = document.querySelector('#excuse');
    if (excuseElement) {
        excuseElement.innerHTML = excuse;
    }
  }

  generateExcuse();
  document.querySelector('#generateBtn').addEventListener('click', generateExcuse);
};
