
function login_admin() {

    let correoing = document.getElementById("correo").value;
    let contraseñaig = document.getElementById("contraseña").value;

    if (admin1.correo_admin === correoing && admin1.contraseña === contraseñaig ) {
     alert("Datos Correctos");
        window.location.href = "verifadmin.html";
    }else{
        alert("Contraseña o correo equivocado");
    }
}

function leer_alumnos() {
    let alumnos = JSON.parse(localStorage.getItem("Datos-Alumnos"));
    let datillos = document.getElementById("insertaralumnos");
    console.log(alumnos);
    datillos.innerHTML = alumnos;

}