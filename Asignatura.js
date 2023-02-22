class Asignatura{
nombre;
materias;
#carrera;
#grupo
constructor(nombre,materias,carrera,grupo){
    this.materias=materias;
    this.nombre=nombre;
    this.carrera=carrera;
    this.grupo=grupo;
}

}
asignarcarrera= function (carrera){
    this.carrera= carrera ;

    asignargrupo = function(grupo){
        this.grupo=grupo;
    }
}

