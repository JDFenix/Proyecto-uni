class administrador {
    clave_issemin;
    contraseña
    constructor(contraseña, clave_issemin) {
        this.contraseña;
        this.clave_issemin;
    }

}
const alumn004 = new Alumno("saul","mata","alegria","14255545712","18/09/2004","9.8", "saul@gmail.com","saul01","133258581","calculo");
console.log(alumn004);


function leer_alumnos() {
    let alumnos = (localStorage.getItem("Datos-Alumnos"));
    let datillos = document.getElementById("insertaralumnos");
    console.log(alumnos);
    datillos.innerHTML = alumn004;

}