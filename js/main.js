
var alumnos = [];

let matricula;
function generar_matricula() {
  //se obtiene la matricula dependiendo al nombre
  let nombre = document.getElementById("nombre").value;
  let matricula_gen = document.getElementById("matricula-gen");
  let daletra = nombre.substring(0, 2).toUpperCase();
  let matriculag = daletra + "-" + Math.floor(Math.random() * 1000000);
  matricula = matriculag;
  matricula_gen.innerHTML = matriculag;


}

function guardarDatosInscripcion() {
  let nombre = document.querySelector("#nombre").value;
  let apellido_pat = document.querySelector("#ap_paterno").value;
  let apellido_mat = document.querySelector("#ap_materno").value;
  let nss = document.querySelector("#nss").value;
  let fecha = document.querySelector("#fecha").value;
  let promedio_bachillerato = document.querySelector("#promedio").value;
  let correo = document.querySelector("#correo").value;
  let contraseña = document.querySelector("#contraseña").value;

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

  generar_matricula();

  let alum07 = new Alumno(nombre, apellido_pat, apellido_mat, nss, fecha, promedio_bachillerato, correo, contraseña, matricula);

  let dats_alms = JSON.parse(localStorage.getItem("Datos-Alumnos")) || [];
  let exists = dats_alms.some(({ correo: c, nss: ns }) => c === correo && ns === nss);

  if (exists) {
    alert("ALUMNO YA REGISTRADO!");
  } else {
    alumnos.push(alum07);
    dats_alms.push(alum07);
    localStorage.setItem("Datos-Alumnos", JSON.stringify(dats_alms));
    alert('DATOS GUARDADOS CORRECTAMENTE! espere sera redireccionado al inicio en 15 segundos  ');
    setTimeout(function () {
      window.location.href = "pantalla1.html"
    }, 15000);
  }
}