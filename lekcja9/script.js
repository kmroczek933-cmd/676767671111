"use strict";

let normalna_zmienna = 0;

function dodajPunkt(){
    normalna_zmienna = normalna_zmienna + 1
    document.getElementById("counter-display").textContent = normalna_zmienna;
} 
    function resetPunktow(){
        normalna_zmienna = 0;
        document.getElementById("counter-display").textContent = normalna_zmienna; 
}

let blindBox = ["Labubu","Karty pokemon","ziemniak","piłka","10zł","butelka kaucyjna"];
function losowanie(){
     let szansa = Math.floor(Math.random() * 137000);

    if(szansa === 0){
        document.getElementById("random-display").textContent = "🌟 TOKEN!!! 🌟";
        return;
    }

    let item = Math.floor(Math.random() * blindBox.length);
    document.getElementById("random-display").textContent = blindBox[item];
}