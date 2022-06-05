function calcular() {
    let monto = +(document.getElementById("monto").value);
    let entrega = +(document.getElementById("entrega").value);
    let cuotas = +(document.getElementById("cuotas").value);
    if (monto > 0 && entrega >= 0 && monto > entrega) {
        for (let i=0; i<12; i++) {
            if ((i+1)==cuotas) {
                totalCuota = (monto-entrega)/cuotas;
            }
        }
        document.getElementById("totalPagar").innerHTML = "Ustedes desea realizar el pago en " + cuotas + " cuotas de $ " + totalCuota;
    } else {
        alert("Revise los valores ingresados");
    }
}
