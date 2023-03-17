export {obtenerCheckboxSeleccionados, nombresCheckbox};
let number_metodologicas = 0;
let number_profesional = 0;
let number_optativa = 0;
let number_basic = 0;

function seleccionar_materias_basicas() {
    number_basic = 0;
    let basic = document.getElementById('basicas').getElementsByTagName("input");
    for (let i = 0; i < basic.length; i++) {
        if (basic[i].checked) {
            number_basic++;
            if (number_basic > 2) {
                basic[i].checked = false;
                number_basic--;
                alert("Solo puede seleccionar un máximo de 2 materias en el área básica.");
            }
        }
    }
}
function seleccionar_materias_metod() {
    number_metodologicas = 0;
    let metod = document.getElementById('metodologicas').getElementsByTagName("input");
    for (let i = 0; i < metod.length; i++) {
        if (metod[i].checked) {
            number_metodologicas++;
        }
    }
}
function seleccionar_materias_optativa() {
    number_optativa = 0;
    let opt = document.getElementById('optativa').getElementsByTagName("input");
    for (let i = 0; i < opt.length; i++) {
        if (opt[i].checked) {
            number_optativa++;
        }
    }
}
function seleccionar_materias_profesional() {
    number_profesional = 0;
    let prof = document.getElementById('profesional').getElementsByTagName("input");
    for (let i = 0; i < prof.length; i++) {
        if (prof[i].checked) {
            number_profesional++;
        }
    }
}


let namesasignature ;
export{obtenerCheckboxSeleccionados, nombresCheckbox}
function obtenerCheckboxSeleccionados() {
    alumnosss = [];
    const checkboxes = document.querySelectorAll('input[name="materias[]"]:checked');
    const nombresCheckbox = Array.from(checkboxes, checkbox => checkbox.nextElementSibling.innerText.trim());
namesasignature = nombresCheckbox;

    // Asignar las materias seleccionadas al alumno correspondiente
    let matriculaing = document.getElementById("Matr");
    let datillos = JSON.parse(localStorage.getItem("Datos-Alumnos"));
    alumnosss = datillos;

    let matriculaExistente = alumnosss.find(({ matricula }) => matricula === matriculaing.value);

    if (matriculaExistente === undefined) {
        alert("La matricula es incorrecta ")
    } else {
        contadorfinal();
        console.log(nombresCheckbox);
       
    }
}

function contadorfinal() {
    seleccionar_materias_basicas();
    seleccionar_materias_profesional();
    seleccionar_materias_metod();
    seleccionar_materias_optativa();


if (number_basic <= 2){
    if (number_basic + number_metodologicas + number_optativa + number_profesional >= 3 && number_basic + number_metodologicas + number_optativa + number_profesional <= 7) {
     
        alert("Sus materias han sido guardadas sera redireccionado al inicio");
       
         let divmat = document.getElementById("Ingresarmatricula");
         divmat.innerHTML = namesasignature.join(", ");
         setTimeout(function(){
             window.location.href="pantalla1.html"
         }, 8000);
         } else {
             alert("Debe seleccionar entre 3 y 7 materias la pagina sera recargada");
      setInterval("location.reload()",1000);
    }
}else{
    alert("ha escogido mas de 2 materias en area basica ")
}
}







