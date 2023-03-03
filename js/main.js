
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
console.log("Datos guardados en localStorage:", localStorage.getItem("Datos-Alumnos"));

  alert('Datos guardados correctamente');
}

/******************************************************************** */



//pagina reinscripcion alumno

function Login() {
  let matriculas = document.getElementById("matricula").value;
  let grupos = document.getElementById("password").value;

  sacarlocaldatos();
  }



/*************PAGINA DONDE SE SCOGEN MATERIAS */





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
