const $pedra = document.getElementById('pedra');
const $pedraNpc = document.getElementById('pedraNpc');

const $papel = document.getElementById('papel');
const $papelNpc = document.getElementById('papelNpc');

const $tesoura = document.getElementById('tesoura');
const $tesouraNpc = document.getElementById('tesouraNpc');

const $reset = document.getElementById('reset');

/*const luck = Math.floor(Math.random() * 3);*/

function pedra() {
   const luck = Math.floor(Math.random() * 3);
   switch(luck){
       case 0:
            $papel.style.display= "none";
            $tesoura.style.display= "none";
            $papelNpc.style.display= "flex";
            setTimeout(() => {reset();}, 1000);
           break;
       case 1:
            $papel.style.display= "none";
            $tesoura.style.display= "none";
            $tesouraNpc.style.display= "flex";
            setTimeout(() => {reset();}, 1000);
           break;
       case 2:
            $papel.style.display= "none";
            $tesoura.style.display= "none";
            $pedraNpc.style.display= "flex";
            setTimeout(() => {reset();}, 1000);
           break;
   }
}

function papel() {
    const luck = Math.floor(Math.random() * 3);
    switch(luck){
        case 0:
             $pedra.style.display= "none";
             $tesoura.style.display= "none";
             $papelNpc.style.display= "flex";
             setTimeout(() => {reset();}, 1000);
            break;
        case 1:
             $pedra.style.display= "none";
             $tesoura.style.display= "none";
             $tesouraNpc.style.display= "flex";
             setTimeout(() => {reset();}, 1000);
            break;
        case 2:
             $pedra.style.display= "none";
             $tesoura.style.display= "none";
             $pedraNpc.style.display= "flex";
             setTimeout(() => {reset();}, 1000);
            break;
    }
 }

 function tesoura() {
    const luck = Math.floor(Math.random() * 3);
    switch(luck){
        case 0:
             $papel.style.display= "none";
             $pedra.style.display= "none";
             $papelNpc.style.display= "flex";
             setTimeout(() => {reset();}, 1000);
            break;
        case 1:
             $papel.style.display= "none";
             $pedra.style.display= "none";
             $tesouraNpc.style.display= "flex";
             setTimeout(() => {reset();}, 1000);
            break;
        case 2:
             $papel.style.display= "none";
             $pedra.style.display= "none";
             $pedraNpc.style.display= "flex";
             setTimeout(() => {reset();}, 1000);
            break;
    }
 }

 function reset(){
    $pedra.style.display= "flex";
    $papel.style.display= "flex";
    $tesoura.style.display= "flex";
    $pedraNpc.style.display= "none";
    $papelNpc.style.display= "none";
    $tesouraNpc.style.display= "none";
 }

/*function pedra() {
    $pedraNpc.style.display= "none";
    $papelNpc.style.display= "flex";
    $tesouraNpc.style.display= "none";
}

function papel(){
    $pedraNpc.style.display= "none";
    $papelNpc.style.display= "none";
    $tesouraNpc.style.display= "flex";
}

function tesoura() {
    $pedraNpc.style.display= "flex";
    $papelNpc.style.display= "none";
    $tesouraNpc.style.display= "none";
}*/