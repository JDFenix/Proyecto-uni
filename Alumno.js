//subclase Alumno
class Alumno extends Persona  {
    // matricula;
    // nss;
    // #Grupo;
    sexo
    constructor(nombre, apellido, matricula, nss, fecha,carrera,grupo, sexo) {
        super(nombre, apellido, matricula, nss, fecha,carrera,grupo)
        // super(nombre, apellido, matricula, nss, fecha);
        // this.matricula=matricula;
        // this.nss = nss;
        // this.#Grupo
        // this.materias = [];
        this.sexo=sexo;
    }


//     agregar_materia = function (materias) {
//         this.materias.push(materias);
//         return materias;
//     }
 }




