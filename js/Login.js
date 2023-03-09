
function login() {
    alumnosss = [];
    let email = document.getElementById("correo");
    let password = document.getElementById("contraseña");

    let datillos = JSON.parse(localStorage.getItem("Datos-Alumnos"));
    alumnosss = datillos;

//se busca en localstorage si algun objeto  coincide con el escrito

function contador_cuatrimestre (){
  let cuatri = document.getElementById("cuatrimestre");
  let cuatri_selecc = cuatri.value;
  console.log(cuatri_selecc);
}

    let usuarioExistente = alumnosss.find(({ correo,contraseña }) => correo=== email.value && contraseña===password.value);
    if (usuarioExistente === undefined) {
      alert("Correo o Contraseña incorrectos")
    } else {
      
         window.location.href = 'areabasica.html';
        contador_cuatrimestre();
    }

  }

  