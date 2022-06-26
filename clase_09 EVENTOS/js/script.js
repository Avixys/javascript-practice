window.addEventListener("DOMContentLoaded", () =>{
    const form = document.querySelector("#formulario");

    const sendForm = (e) => {
        e.preventDefault();
        const {name, email, addres, city, state, zip} = e.target;
        const datos = document.getElementById ("dataInput");
        datos.innerHTML = `<h4 class="text-center text-white"> Los datos ingresados son los siguientes:</h4>
                           <h5 class="text-center text-white">Nombre: ${name.value}</h5>
                           <h5 class="text-center text-white">Email: ${email.value}</h5>
                           <h5 class="text-center text-white">Dirección: ${addres.value}</h5>
                           <h5 class="text-center text-white">Localidad: ${city.value}</h5>
                           <h5 class="text-center text-white">Provincia: ${state.value}</h5>
                           <h5 class="text-center text-white">Código Postal: ${zip.value}</h5>`
        form.reset();
    }

    form.addEventListener ("submit", sendForm);
})