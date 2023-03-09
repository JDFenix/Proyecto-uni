
var carreras = [];
var docentes = [];
var asignaturas = [];
var grupos = [];
var alumnos = [];

let matricula;
function generar_materia() {
  //se obtiene la matricula dependiendo al nombre
  var nombre = document.getElementById("nombre").value;
  let matricula_gen = document.getElementById("matricula-gen");
  var daletra = nombre.substring(0, 2).toUpperCase();
  var matriculag = daletra + "-" + Math.floor(Math.random() * 1000000);
  matricula = matriculag;
  matricula_gen.innerHTML = matriculag;


}

function guardarDatosInscripcion() {
  var nombre = document.querySelector("#nombre").value;
  var apellido_pat = document.querySelector("#ap_paterno").value;
  var apellido_mat = document.querySelector("#ap_materno").value;
  var nss = document.querySelector("#nss").value;
  var fecha = document.querySelector("#fecha").value;
  var promedio_bachillerato = document.querySelector("#promedio").value;
  var correo = document.querySelector("#correo").value;
  var contraseña = document.querySelector("#contraseña").value;

  if (nombre.trim() === '' ||
  apellido_pat.trim() === '' ||
    apellido_mat.trim() === '' ||
    nss.trim() === '' ||
    fecha.trim() === '' ||
    promedio_bachillerato.trim() === '' ||
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



  generar_materia();

  let alum07 = new Alumno(nombre, apellido_pat, apellido_mat, nss, fecha, promedio_bachillerato, correo, contraseña, matricula);
  alumnos.push(alum07);

  guardar_alumnos();
}

function guardar_alumnos() {
  let correo = document.getElementById("correo").value;
  let apellido_pat = document.getElementById("ap_paterno").value;
  let apellido_mat = document.getElementById("ap_materno").value;
  let nss = document.getElementById("nss").value;

  let dats_alms = JSON.parse(localStorage.getItem("Datos-Alumnos")) || [];

  let verificacion_name = dats_alms.find(({ apellido_pat: ap, apellido_mat: am, correo: c, nss: ns }) => ap === apellido_pat && am === apellido_mat && c === correo && ns === nss);

  if (verificacion_name === undefined) {
    // El alumno no está duplicado en el localStorage
    let alum07 = new Alumno(apellido_pat, apellido_mat, correo, nss);
    alumnos.push(alum07);
    localStorage.setItem("Datos-Alumnos", JSON.stringify(alumnos));
    alert('Datos guardados correctamente');
    window.location.href = "areabasica.html"
  } else {
    alert("ALUMNO YA REGISTRADO!");
  }
}

