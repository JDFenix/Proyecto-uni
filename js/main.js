
var carreras = [];
var docentes = [];
var asignaturas = [];
var grupos = [];
var alumnos = [];


//pagina inscripcion alumno
function guardarDatosInscripcion() {

  var nombre = document.getElementById("nombre").value;
  let apellido_pat = document.getElementById("ap-paterno").value;
  let apellido_mat = document.getElementById("ap-materno").value;
  let promedio_bachillerato = document.getElementById("promedio").value; 
  let nss = document.getElementById("nss").value;
  let fecha = document.getElementById("fecha").value;
  let correo = document.getElementById("correo").value
  let contraseña = document.getElementById("contraseña").value;

  //se obtiene la matricual dependiendo al nombre
 let matricula_gen = document.getElementById("matricula-gen");
 var daletra = nombre.substring(0, 2).toUpperCase();
 var matricula = daletra + "-" + Math.floor(Math.random() * 1000000);
 matricula_gen.innerHTML = matricula;

 /*se guarda el alumno en local */
  let alum07 = new Alumno(nombre, apellido_pat,apellido_mat, nss, fecha,promedio_bachillerato,correo,contraseña,matricula);
  alumnos.push(alum07);
  localStorage.setItem("Datos-Alumnos", JSON.stringify(alumnos));
  alert('Datos guardados correctamente');
  var datos_almns = localStorage.getItem("Datos-Alumnos");
  console.log(JSON.parse(datos_almns));
}







function generarMatricula() {

  let nombre_ingresado = document.getElementById("nombre").value
}







/******************************************************************** */



//pagina reinscripcion alumno

function guardarDatosreinsc() {
  alert("datos generados ajua")

  let matriculas = document.getElementById("matricula").value;
  let grupos = document.getElementById("password").value;

  var datillos = {
    matricula: matricula, contraseña: contraseña, grupo: grupo
  }

  localStorage.setItem("datos-guardar", JSON.stringify(datillos));
  alert('Datos guardados correctamente');

  var datooos = localStorage.getItem("datos-guardar");
  console.log(JSON.parse(datooos));

  document.getElementById("Cambiar-btn").removeAttribute("disabled", "");

  let result = alumnos.find(({ nombre }) => nombre === nombre.value);

  if (result == undefined) {
    users.push(user1);
    localStorage.setItem('users', JSON.stringify(users));
    alert("Usuario Registrado");
    console.log(result);
  }
  
  }



/*************PAGINA DONDE SE SCOGEN MATERIAS */

function materiasbtn() {
  var materiasDiv = document.getElementById("materias");
  if (materiasDiv.style.display === "none") {
    materiasDiv.style.display = "block";
  } else {
    materiasDiv.style.display = "none";
  }


}



var miCheckbox = document.getElementById("miCheckbox");

if (miCheckbox) {
  // Verificar si la casilla está seleccionada
  if (miCheckbox.checked) {
    console.log("La casilla está seleccionada");
  } else {
    console.log("La casilla no está seleccionada");
  }
} else {
  console.log("No se encontró el elemento input");
}




/********************************************************************************* */


class Helper {
  static getUsersFromLocalStorage() {
    let users = [];
    let arrayUsers = JSON.parse(localStorage.getItem('users'));
    if (arrayUsers.length != 0) {
      arrayUsers.forEach(userarray => {
        let user2 = new User(userarray.email, userarray.password);
        users.push(user2);
      });
    }
    return users;

  }

}
