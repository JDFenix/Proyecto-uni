
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

  //se obtiene la matricula dependiendo al nombre
  let matricula_gen = document.getElementById("matricula-gen");
  var daletra = nombre.substring(0, 2).toUpperCase();
  var matricula = daletra + "-" + Math.floor(Math.random() * 1000000);
  matricula_gen.innerHTML = matricula;

//todos los datos ingresados se guardan en una variable de clase alumno
  let alum07 = new Alumno(nombre, apellido_pat, apellido_mat, nss, fecha, promedio_bachillerato, correo, contraseña, matricula);
  alumnos.push(alum07);


  let dts = [];
  let dats_alms = JSON.parse(localStorage.getItem("Datos-Alumnos"));
  dts = dats_alms;

  let verificacion_name = dts.find(({ apellido_pat, apellido_mat, correo }) => apellido_pat === alum07.apellido_pat && apellido_mat === alum07.apellido_mat && correo === alum07.correo);

//si el alumno ya esta registrado  o se guardaran sus datos 
  if (verificacion_name === undefined) {
    // el alumno no está duplicado en el localstorage
    localStorage.setItem("Datos-Alumnos", JSON.stringify(alumnos));
    alert('Datos guardados correctamente');
    window.location.href="eleccionmaterias.html"
  } else {
    alert("ALUMNO NO REGISTRADO, VERIFIQUE SUS DATOS!");
  }
}


