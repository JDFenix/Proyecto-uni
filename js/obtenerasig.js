// function obtenerCheckboxSeleccionados() {
//     alumnosss = [];
//     const checkboxes = document.querySelectorAll('input[name="materias[]"]:checked');
//     const nombresCheckbox = Array.from(checkboxes, checkbox => checkbox.nextElementSibling.innerText.trim());




//     // Asignar las materias seleccionadas al alumno correspondiente
//     let matriculaing = document.getElementById("Matr");
//     let datillos = JSON.parse(localStorage.getItem("Datos-Alumnos"));
//     alumnosss = datillos;


//     let matriculaExistente = alumnosss.find(({ matricula }) => matricula === matriculaing.value);

//     if (matriculaExistente === undefined) {
//         alert("La matricula es incorrecta ")
//     } else {
//         contadorfinal();
//         console.log(nombresCheckbox);
       

//         //  Mostrar los nombres de las materias seleccionadas en la página
//         // let divmat = document.getElementById("Ingresarmatricula");
//         // divmat.innerHTML = nombresCheckbox.join(", ");


//     }
// }

// JA-660137