
function actualizar() {
    
    let dats = document.getElementById("contadorbasic");
    let localbasic = JSON.parse(localStorage.getItem("contador"));
    let contador = localbasic;
    if (contador != null) {
        alert("bien");
        dats.innerHTML = contador;
        localStorage.removeItem("contador");
    }
}

//Se evalua si los checkbox seleccionados son igual o menor a 2
let number_basic = 0;
function seleccionar_materias() {

    let basic = document.getElementById('basicas').getElementsByTagName("input");

    for (let i = 0; i < basic.length; i++) {

        if (basic[i].checked) {
            number_basic++;
        }
    }

    if (number_basic <= 2 && number_basic > 0) {
        localStorage.setItem("contador", JSON.stringify(number_basic));


        alert('materias guardadas');
         window.location.href = "eleccionmaterias.html";

    } else {
        alert("El número  de materias basicas debe ser igual a 2 ")
    }
}

/************************************************************************************** */

let name = document.getElementsByTagName("amuelajua");
console.log(name);