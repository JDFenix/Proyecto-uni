
var carreras = [];
var docentes = [];
var asignaturas = [];
var grupos = [];
var alumnos = [];


//pagina inscripcion alumno
function guardarDatosInscripcion() {

  // let matricula = document.getElementById("matricula").value;
  var nombre = document.getElementById("Nombre-alumno").value;
  let apellido = document.getElementById("apellido").value;
  let nss = document.getElementById("nss").value;
  let fecha = document.getElementById("edad").value;

  let alum07 = new Persona(nombre, apellido, nss, fecha);

  alumnos.push(alum07);

  localStorage.setItem("Datos-Alumnos", JSON.stringify(alumnos));
  alert('Datos guardados correctamente');

  var datooos = localStorage.getItem("Datos-Alumnos");
  console.log(JSON.parse(datooos));
  document.getElementById("Cambiar-btn-ins").removeAttribute("disabled", "");

  alumnos.value = "";


  
}







function generarMatricula() {
  console.log("generarMatricula() se está ejecutando...");
  var nombre = document.getElementById("names").value;
  console.log("Nombre ingresado: " + nombre);
  var daletra = nombre.substring(0, 2).toUpperCase();
  console.log("2daletra: " + daletra);
  var matricula = daletra + "-" + Math.floor(Math.random() * 100000);
  console.log("Matrícula generada: " + matricula);
  document.getElementById("show_matricula").innerHTML = matricula;


  localStorage.setItem("Genrrerar_mat", JSON.stringify(matricula));
  console.log(localStorage.getItem(matricula))


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
