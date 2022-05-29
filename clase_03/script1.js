/*Pedir un número 5 veces mediante prompt y 
sumarle otro número en cada repetición,
realizando una salida por cada resultado*/

let number1 = +(prompt("Ingrese N° que será sumado en cada repetición"));
let sum = 0;
let sumAcc = number1;
let finalSum = " ";
let finalSumAcc = " ";
for (let i=0; i<5; i++){
    let number2 = +(prompt("Ingrese N° para sumar"));
    //suma
    sum = number1 + number2;
    finalSum = number1 + "+" + number2 + "=";
    console.log("Suma:");
    console.log(finalSum + sum);

    //suma acumulada
    finalSumAcc = sumAcc + "+" + number2 + "=";
    sumAcc = sumAcc + number2;
    console.log("Suma Acumulada:");
    console.log(finalSumAcc + sumAcc);
}