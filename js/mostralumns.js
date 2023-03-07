leer_alumnos();

function leer_alumnos() {
    let alumnos = JSON.parse(localStorage.getItem("Datos-Alumnos"));
    let datillos = document.getElementById("insertaralumnos");
    console.log(alumnos);
    datillos.innerHTML = alumnos;

}




