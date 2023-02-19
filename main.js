
var carreras = [];
var alumnos = [];
var docentes = [];
var asignaturas = [];
var grupos = [];


function guardarDatosInscripcion() {
  var nombre = document.getElementById("Nombre-alumno").value;
  let apellido = document.getElementById("apellido").value;
  let matricula = document.getElementById("matricula").value;
  let nss = document.getElementById("nss").value;
  let fecha = document.getElementById("edad").value;

  let alum007 = new Alumno(matricula.value,contraseña.value,grupo.value)
      
  alumnos.push(alum007);

var datillos = {
  nombre: nombre,
  apellido: apellido,
  matricula:matricula,
  nss:nss,
  fecha:fecha
};

localStorage.setItem("datos-guardar",JSON.stringify (datillos));
alert('Datos guardados correctamente');

var datooos = localStorage.getItem("datos-guardar");
console.log(JSON.parse(datooos));
  document.getElementById("Cambiar-btn-ins").removeAttribute("disabled", "");


}




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















