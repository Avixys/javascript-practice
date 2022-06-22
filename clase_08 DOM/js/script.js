const button = document.getElementById("btn-calc");
button.onclick = () => {
    const monto = parseFloat(document.getElementById("monto").value);
    const entrega = parseFloat(document.getElementById("entrega").value);
    const cuotas = [
        {id:1, nombre:"1 Pago", valor:monto-entrega},
        {id:3, nombre:"3 Pagos",  valor:(monto-entrega)/3},
        {id:6, nombre:"6 Pagos",  valor:(monto-entrega)/6},
        {id:12, nombre:"12 Pagos",  valor:(monto-entrega)/12}
    ];
    let total = document.getElementById("totalPagar");
    total.innerHTML = `<h4 class="text-center text-white">Sus opciones de pago son las siguientes</h4>`;
    cuotas.forEach ((cuotas) => {
        total.innerHTML += `<h4 class="text-center text-white"> ${cuotas.nombre} de $${cuotas.valor.toFixed(2)}</h4>`
    });
}
