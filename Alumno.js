//subclase Alumno
class Alumno extends Persona {
    Matricula;
    NSS;
    #Grupo;
    constructor(nombre, apellidos, fecha, nss,) {
        super(nombre, apellidos, fecha);
        this.nss = nss;
        this.materias = [];
    }


    agregar_materia = function (materias) {
        this.materias.push(materias);
        return materias;
    }

}




