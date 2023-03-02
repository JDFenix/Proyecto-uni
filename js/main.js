
var carreras = [];
var docentes = [];
var asignaturas = [];
var grupos = [];
var alumnos = [];


 //pagina inscripcion alumno
 function guardarDatosInscripcion() {
  
   // let matricula = document.getElementById("matricula").value;
   var nombre = document.getElementById("nombre").value;
   let ap_pat = document.getElementById("ap-paterno").value;
   let ap_mat = document.getElementById("ap-materno").value;
   let numss = document.getElementById("nss").value;
   let fecha = document.getElementById("fecha").value;
   let prom_bach = document.getElementById("promedio")
   let correo = document.getElementById("correo").value;
   let contraseña = document.getElementById("contraseña").value;


   let alum07 = new Alumno(nombre, apellido,fecha,correo, contraseña);

  alumnos.push(alum07);
   localStorage.setItem("Datos-Alumnos", JSON.stringify(alumnos));
   alert('Datos guardados correctamente');
  var datooos = localStorage.getItem("Datos-Alumnos");
   console.log(JSON.parse(datooos));
   
 

  
 }
// /***************************************************** */





// /****************************************************** */

// function generarMatricula() {
//   console.log("generarMatricula() se está ejecutando...");
//   var nombre = document.getElementById("names").value;
//   console.log("Nombre ingresado: " + nombre);
//   var daletra = nombre.substring(0, 2).toUpperCase();
//   console.log("2daletra: " + daletra);
//   var matricula = daletra + "-" + Math.floor(Math.random() * 100000);
//   console.log("Matrícula generada: " + matricula);
//   document.getElementById("show_matricula").innerHTML = matricula;


//   localStorage.setItem("Genrrerar_mat", JSON.stringify(matricula));
//   console.log(localStorage.getItem(matricula))


// }


// /******************************************************************** */



// //pagina reinscripcion alumno

// function guardarDatosreinsc() {
//   alert("datos generados ajua")

//   let matriculas = document.getElementById("matricula").value;
//   let grupos = document.getElementById("password").value;

//   var datillos = {
//     matricula: matricula, contraseña: contraseña, grupo: grupo
//   }

//   localStorage.setItem("datos-guardar", JSON.stringify(datillos));
//   alert('Datos guardados correctamente');

//   var datooos = localStorage.getItem("datos-guardar");
//   console.log(JSON.parse(datooos));

//   document.getElementById("Cambiar-btn").removeAttribute("disabled", "");

//   let result = alumnos.find(({ nombre }) => nombre === nombre.value);

//   if (result == undefined) {
//     users.push(user1);
//     localStorage.setItem('users', JSON.stringify(users));
//     alert("Usuario Registrado");
//     console.log(result);
//   }
  
//   }





// /*************PAGINA DONDE SE SCOGEN MATERIAS */






// /********************************************************************************* */


// function registrador(){

//   // var alumnos = Helper.obtenerusuarioslocal();

//   console.log("heloooooo")

//   let correo = document.getElementById("correo").value;
//   let contraseña = document.getElementById("contraseña").value;



//   let email = JSON.parse(localStorage.getItem('Datos-Alumnos'));
 
//   console.log(JSON.parse('Datos-Alumno') );

//   let password = JSON.parse(localStorage.getItem('Datos-Alumnos'));
//   // let resultados2 = password.find (({contraseña}) => contraseña === contraseña.value);
//   console.log( password);
  


//   if(resultados1 != correo){    

//     alert("Usuario no Registrado");
    
// }else{
//     alert("El usuario ya se encuentra registrado");
//     if (password != contraseña){
// console.log("sesion no iniciada");
//     }else{
//     console.log("secion inciadia")
//     }
// }

// }
/*********************************************************************************************** */



