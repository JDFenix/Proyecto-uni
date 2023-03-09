

//Se evalua si los checkbox seleccionados son igual o menor a 2
let number_basic = 0;
let number_metodologicas = 0;
let number_pofesional = 0;
let number_optativa = 0;

function contadorfinal() {
    seleccionar_materias_basicas();
    seleccionar_materias_metod();
    if (number_basic + number_metodologicas + number_optativa + number_pofesional <= 7) {
        alert("sus materias han sido guardadas")
    } else {
        alert("ha escogido mas de 7 materias ")
    }
}

function seleccionar_materias_basicas() {
    let basic = document.getElementById('basicas').getElementsByTagName("input");
    for (let i = 0; i < basic.length; i++) {
        if (basic[i].checked) {
            number_basic++;
        }
    }
    if (number_basic <= 2 && number_basic > 0) {
        obtenerCheckboxSeleccionados();
    } else {
        alert("El número  de materias basicas debe ser igual o menor a 2 ")
    }
}
/***************************************************************************** */
function seleccionar_materias_metod() {
    let metodo = document.getElementById('metodologicas').getElementsByTagName("input");
    for (let i = 0; i < metodo.length; i++) {
        if (metodo[i].checked) {
            number_metodologicas++;
        }
    }
    if (number_metodologicas <= 5 && number_metodologicas > 0) {
        obtenerCheckboxSeleccionados();
    }
}
