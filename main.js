
var carreras = [];
var docentes = [];
var asignaturas = [];
var grupos = [];
var alumnos = [];


//pagina inscripcion alumno
function guardarDatosInscripcion() {
  
  let matricula = document.getElementById("matricula").value;
  let carrera = document.getElementById("carrera").value;

  var nombre = document.getElementById("Nombre-alumno").value;

//    let apellido = document.getElementById("apellido").value;
 
//   let nss = document.getElementById("nss").value;
//    let fecha = document.getElementById("edad").value;
  
//  let grupo = document.getElementById("grupo").value;
//    let sexo = document.getElementById("sexo").value;


  let alum07 = new Persona(nombre, matricula,carrera);

  alumnos.push(alum07);

<<<<<<< HEAD
  localStorage.setItem("Datos-Alumnos", JSON.stringify(alumnos));
  alert('Datos guardados correctamente');

  var datooos = localStorage.getItem("Datos-Alumnos");
=======
  localStorage.setItem("Alumnos-Datos", JSON.stringify(alumnos));
  alert('Datos guardados correctamente');

  var datooos = localStorage.getItem("Alumnos-Datos");
>>>>>>> 6c08e223a43eb05cb32231d02712eefeb1629368
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




function generarMatricula() {
  console.log("generarMatricula() se está ejecutando...");
  var nombre = document.getElementById("nombre").value;
  console.log("Nombre ingresado: " + nombre);
  var daletra = nombre.substring(0,2).toUpperCase();
 console.log("2daletra: " + daletra);
  var matricula = daletra + "-" + Math.floor(Math.random() * 100000);
  console.log("Matrícula generada: " + matricula);
  document.getElementById("show_matricula").innerHTML = matricula;
}


/******************************************************************** */   



//pagina reinscripcion alumno


function guardarDatosreinsc() {
alert("datos generados ajua")
  let names = document.getElementById("Nombre-alumno").value;
  let matriculas = document.getElementById("matricula").value;
  let grupos = document.getElementById("carrera").value;




  let animales ={
    names:names,matriculas:matriculas,grupos:grupos
  }

  

  var dats = localStorage.getItem("Datos-Alumnos");
      JSON.parse(dats);

      if(dats === animales ){ 
        console.log("datos guardados");
      }else{
        console.log("Usuario o contraseña incorrectos");
      }


      document.getElementById("Cambiar-btn").removeAttribute("disabled", "");

}
 


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