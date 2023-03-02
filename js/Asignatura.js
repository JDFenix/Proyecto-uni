class Asignatura {
    nombre;
    materias;
    #carrera;
    #grupo
    constructor(nombre, grupo) {

        this.nombre = nombre;

        this.grupo = grupo;
    }

}

// Objeto que contiene la selección de los checkboxes

const seleccion = {};

// Función para mostrar la selección en la consola
function mostrarSeleccion(checkbox) {

    var datillos = document.getElementById("materiass");

    if (datillos.checked) {
        var valor = datillos.value;
        console.log("El valor del checkbox es: " + valor);
    }

}



function enviarFormulario() {
    materias = "";
    var formulario = document.getElementById("asignaturas_lista");
    var asignaturas_seleccionadas = [];

    for (var i = 0; i < formulario.elements.length; i++) {
        var elemento = formulario.elements[i];
        if (elemento.type === "checkbox" && elemento.checked) {
            asignaturas_seleccionadas.push(elemento.value);
        }
    }
    
    materias.push(asignaturas_seleccionadas);

    console.log("Opciones seleccionadas: " +  materias);
}



