
console.log ('script cargado');
'use strict'


    
/* un input para euros y pintar su
aquivalencia en yenes, libras y dolares y coronas*/

function convierte(){
    let nodoEuros = document.querySelector ('#euros');
    let valorEuros = nodoEuros.value;
    nodoEuros.value = '';
    console.log (valorEuros)

    let rupia = 133.35;
    let chelin = 2499.83;
    let dinar = 0.33;
    let florin = 1.93;

    rupia = (valorEuros * rupia);
    console.log (rupia);
    
    chelin = (valorEuros * chelin);
    console.log (chelin);

    dinar = (valorEuros * dinar);
    console.log (dinar);

    florin = (valorEuros * florin);
    console.log (florin);

    let nodoRupia = document.querySelector ('#rupia');
    nodoRupia.innerHTML = '<h2>' + rupia + '</h2>';

    let nodoChelin = document.querySelector ('#chelin');
    nodoChelin.innerHTML = '<h2>' + chelin + '</h2>';

    let nodoDinar = document.querySelector ('#dinar');
    nodoDinar.innerHTML = '<h2>' + dinar + '</h2>';

    let nodoFlorin = document.querySelector ('#florin');
    nodoFlorin.innerHTML = '<h2>' + florin + '</h2>';
}
