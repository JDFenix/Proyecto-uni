
var carreras = [];
var docentes = [];
var asignaturas = [];
var grupos = [];
var alumnos = [];


//pagina inscripcion alumno
function guardarDatosInscripcion() {
  var nombre = document.getElementById("Nombre-alumno").value;
  let apellido = document.getElementById("apellido").value;
  let matricula = document.getElementById("matricula").value;
  let nss = document.getElementById("nss").value;
  let fecha = document.getElementById("edad").value;
  let carrera = document.getElementById("carrera").value;
  let grupo = document.getElementById("grupo").value;
  let sexo = document.getElementById("sexo").value;


  let alum07 = new Persona(nombre, apellido, matricula, nss, fecha,carrera,grupo);

  alumnos.push(alum07);

  localStorage.setItem("Alumnos-Datos", JSON.stringify(alumnos));
  alert('Datos guardados correctamente');

  var datooos = localStorage.getItem("Alumnos-Datos");
  console.log(JSON.parse(datooos));
  document.getElementById("Cambiar-btn-ins").removeAttribute("disabled", "");

}

function Login (){
  var nombre = document.getElementById("Nombre-alumno").value;
  let apellido = document.getElementById("apellido").value;
  let matricula = document.getElementById("matricula").value;
localstorage.getitem("Alumnos-Datos",datooos)
console.log(JSON.parse(datooos));
  
}




//pagina reinscripcion alumno
function guardarDatosreinsc() {

  let matricula = document.getElementById("matricula").value;
  let contraseña = document.getElementById("contraseña").value;
  let grupo = document.getElementById("grupo").value;

  let alum007 = new Alumno(matricula.value,contraseña.value,grupo.value)
  alumnos.push(alum007);

  var datillos = {
  matricula:matricula, contraseña:contraseña, grupo:grupo
  }

localStorage.setItem("datos-guardar",JSON.stringify (datillos));
alert('Datos guardados correctamente');

var datooos = localStorage.getItem("datos-guardar");
console.log(JSON.parse(datooos));

  document.getElementById("Cambiar-btn").removeAttribute("disabled", "");

}

// function materiasbtn() {
//   var materiasDiv = document.getElementById("materias");
//   if (materiasDiv.style.display === "none") {
//     materiasDiv.style.display = "block";
//   } else {
//     materiasDiv.style.display = "none";
//   }
// }





// function generarMatricula() {
//   console.log("generarMatricula() se está ejecutando...");
//   var nombre = document.getElementById("nombre").value;
//   console.log("Nombre ingresado: " + nombre);
//   var primeraLetra = nombre.charAt(0).toUpperCase();
//   console.log("Primera letra: " + primeraLetra);
//   var matricula = primeraLetra + "-" + Math.floor(Math.random() * 10000);
//   console.log("Matrícula generada: " + matricula);
//   document.getElementById("matricula").innerHTML = matricula;
// }







