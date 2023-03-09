

//Se evalua si los checkbox seleccionados son igual o menor a 2
let number_basic = 0;
let number_metodologicas = 0;
let number_profesional = 0;
let number_optativa = 0;



function contadorfinal() {

    seleccionar_materias_basicas();
    seleccionar_materias_profesional();
    seleccionar_materias_metod();
    seleccionar_materias_optativa();


    if (number_basic + number_metodologicas + number_optativa + number_profesional < 8 && number_basic + number_metodologicas + number_optativa + number_profesional > 0) {
        obtenerCheckboxSeleccionados();
        alert("sus materias han sido guardadas");
         window.location.href = "pantalla1.html"
    } else {
        alert("ha escogido mas de 7 materias o ninguna ");
         number_basic = 0;
         number_metodologicas = 0;
         number_profesional = 0;
         number_optativa = 0;
    }
}


/***************************************************************************** */

function seleccionar_materias_basicas() {


    let basic = document.getElementById('basicas').getElementsByTagName("input");
    for (let i = 0; i < basic.length; i++) {
        if (basic[i].checked) {
            number_basic++;
        }
    }
    if (number_basic <= 2) {
    } else {
        number_basic = 0;
    }
}

function seleccionar_materias_metod() {
    let metodo = document.getElementById('metodologicas').getElementsByTagName("input");
    for (let i = 0; i < metodo.length; i++) {
        if (metodo[i].checked) {
            number_metodologicas++;
        }
    }
}


function seleccionar_materias_profesional() {
    let prof = document.getElementById('profesional').getElementsByTagName("input");
    for (let i = 0; i < prof.length; i++) {
        if (prof[i].checked) {
            number_profesional++;
        }
    }
}

function seleccionar_materias_optativa() {
    let opt = document.getElementById('metodologicas').getElementsByTagName("input");
    for (let i = 0; i < opt.length; i++) {
        if (opt[i].checked) {
            number_optativa++;
        }
    }

}