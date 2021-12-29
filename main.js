const $start = document.getElementById('container');
const $win = document.getElementById('container2');

const $pedra = document.getElementById('pedra');
const $pedraNpc = document.getElementById('pedraNpc');

const $papel = document.getElementById('papel');
const $papelNpc = document.getElementById('papelNpc');

const $tesoura = document.getElementById('tesoura');
const $tesouraNpc = document.getElementById('tesouraNpc');

/*const $reset = document.getElementById('reset');
const $winReset = document.getElementById('win-reset');*/

/*const luck = Math.floor(Math.random() * 3);*/

function pedra() {
   const luck = Math.floor(Math.random() * 3);
   switch(luck){
       case 0:
        stopEvent()
            $papel.style.display= "none";
            $tesoura.style.display= "none";
            $papelNpc.style.display= "flex"; 
            setTimeout(() => {reset();}, 1500);
           break;
       case 1:
        stopEvent()
            $papel.style.display= "none";
            $tesoura.style.display= "none";
            $tesouraNpc.style.display= "flex";
           setTimeout(() => {win()}, 1500);
           break;
       case 2:
        stopEvent()
            $papel.style.display= "none";
            $tesoura.style.display= "none";
            $pedraNpc.style.display= "flex";
            setTimeout(() => {reset();}, 1500);
           break;
   }
}

function papel() {
    const luck = Math.floor(Math.random() * 3);
    switch(luck){
        case 0:
        stopEvent()
             $pedra.style.display= "none";
             $tesoura.style.display= "none";
             $papelNpc.style.display= "flex";
             setTimeout(() => {reset();}, 1500);
            break;
        case 1:
        stopEvent()
             $pedra.style.display= "none";
             $tesoura.style.display= "none";
             $tesouraNpc.style.display= "flex";
             setTimeout(() => {reset();}, 1500);
            break;
        case 2:
        stopEvent()
             $pedra.style.display= "none";
             $tesoura.style.display= "none";
             $pedraNpc.style.display= "flex";
             setTimeout(() => {win()}, 1500);
            break;
    }
 }

 function tesoura() {
    const luck = Math.floor(Math.random() * 3);
    switch(luck){
        case 0:
        stopEvent()
             $papel.style.display= "none";
             $pedra.style.display= "none";
             $papelNpc.style.display= "flex";
             setTimeout(() => {win()}, 1500);
            break;
        case 1:
        stopEvent()
             $papel.style.display= "none";
             $pedra.style.display= "none";
             $tesouraNpc.style.display= "flex";
             setTimeout(() => {reset();}, 1500);
            break;
        case 2:
        stopEvent()
             $papel.style.display= "none";
             $pedra.style.display= "none";
             $pedraNpc.style.display= "flex";
             setTimeout(() => {reset();}, 1500);
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

function win(){
    $start.style.display= "none";
    $win.style.display= "flex";
}

 function winReset(){
    $pedra.style.display= "flex";
    $papel.style.display= "flex";
    $tesoura.style.display= "flex";
    $pedraNpc.style.display= "none";
    $papelNpc.style.display= "none";
    $tesouraNpc.style.display= "none";
    $start.style.display= "flex";
    $win.style.display= "none";
 }

 $pedra.addEventListener('click', pedra);
 $papel.addEventListener('click', papel);
 $tesoura.addEventListener('click', tesoura);

 function stopEvent(){
     $pedra.removeEventListener('click',pedra);
     $papel.removeEventListener('click',papel);
     $tesoura.removeEventListener('click',tesoura);
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