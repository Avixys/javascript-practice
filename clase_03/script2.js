/*Pedir un texto mediante prompt,
concatenar un valor en cada repetición,
realizando una salida por cada resultado,
hasta que se ingresa “ESC”.*/

let text = prompt ("Ingrese Texto Inicial");
let finalText = text;
let textConc = " ";

while (textConc != "ESC"){
    textConc = prompt("Ingrese Texto a Concatenera o Ingrese ESC para finalizar");
    finalText = text + " " + textConc;
    if (textConc === "ESC"){
        console.log ("Ingresaste ESC, finalizará el Proceso");
    }else {
        console.log(finalText);
    }
}