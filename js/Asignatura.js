class Asignatura {
    nombre;

    constructor(nombre, materias, carrera, grupo) {

        this.nombre = nombre;

    }

}

function seleccionar_materias() {
    let number_basic = 0;
    let number_method = 0;
    let basic = document.getElementById('basicas').getElementsByTagName("input");


    for (let i = 0; i < basic.length; i++) {
        if (basic[i].checked) {
            number_basic++;
        }
    }

    console.log(number_basic);
let counter = document.getElementById()

    // let method = document.getElementById('metodologicas').getElementsByTagName("input");
    // for (let i = 0; i < method.length; i++) {
    //     if (method[i].checked) {
    //         number_method++;
    //     }
    // }
    // console.log(number_method);

    if (number_basic == 2) {
      
    let cont = document.getElementById('cont_basic');
    matricula_gen.innerHTML = matricula;


    } else {

        alert("El número  de materias basicas debe ser igual a 2 y el número dematerias metodologicas debe ser igual a 5")
    }

    // const js = document.querySelector('#materiasselecc');
    // console.log(js.checked);

}
