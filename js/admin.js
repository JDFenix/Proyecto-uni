class administrador {
    clave_issemin;
    contraseña
    constructor(contraseña, clave_issemin) {
        this.contraseña;
        this.clave_issemin;
    }

}

function leer_alumnos() {
    let alumnos = JSON.parse(localStorage.getItem("Datos-Alumnos"));
    let datillos = document.getElementById("insertaralumnos");
    console.log(alumnos);
    datillos.innerHTML = alumnos;

}