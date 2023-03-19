function guardarDatosInscripcion() {
    var nombre = document.querySelector("#nombre").value;
    var ap_paterno = document.querySelector("#ap_paterno").value;
    var ap_materno = document.querySelector("#ap_materno").value;
    var nss = document.querySelector("#nss").value;
    var fecha = document.querySelector("#fecha").value;
    var promedio = document.querySelector("#promedio").value;
    var correo = document.querySelector("#correo").value;
    var contraseña = document.querySelector("#contraseña").value;

    if (nombre.trim() === '' ||
        ap_paterno.trim() === '' ||
        ap_materno.trim() === '' ||
        nss.trim() === '' ||
        fecha.trim() === '' ||
        promedio.trim() === '' ||
        correo.trim() === '' ||
        contraseña.trim() === '') {

        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'FALTA LLENAR CAMPOS',
            footer: 'Por favor llena todos los campos e intenta de nuevo'
        });
        return;
    }
}

function DatosAdmin() {
    var correo = document.querySelector("#correo").value;
    var contraseña = document.querySelector("#contraseña").value;

    if (correo.trim() === '' ||
        contraseña.trim() === '') {

        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'FALTA LLENAR CAMPOS',
            footer: 'Por favor llena todos los campos e intenta de nuevo'
        });
        return;
    }
}


function leer_alumnos() {

    Swal.fire(
        'Verificado!',
        'Los datos fueron verificados!',
        'success'
      );
        return;
    
}
