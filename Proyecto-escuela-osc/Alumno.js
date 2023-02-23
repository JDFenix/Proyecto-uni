class Alumno extends Persona {
    Nombre
    Matricula;
    NSS;
    Carrera;
    Materias;
    constructor(nombre,matricula,nss,carrera,materias){
        super(nombre,matricula,nss,carrera,materias)
        this.Nombre = nombre;
        this.Matricula = matricula;
        this.NSS = nss;
        this.Carrera = carrera;
        this.Materias = materias;
    
    }
    agregar_materia = function (materias){
        this.materias.push(materias);
         return materias;
         
    }
}