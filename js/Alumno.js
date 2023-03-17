//subclase Alumno
class Alumno extends Persona {
    matricula;
    promedio_bachillerato;
    correo;
    contraseña;
    nss;
    materia;
    cuatrimestre;


    //Se crea una clase alumno con los anteriores datos
    constructor(nombre, apellido_pat, apellido_mat, nss, fecha, promedio_bachillerato, correo, contraseña, matricula, materia, cuatrimestre) {
        super(nombre, apellido_pat, apellido_mat, fecha)

        this.matricula = matricula;
        this.promedio_bachillerato = promedio_bachillerato;
        this.correo = correo;
        this.contraseña = contraseña;
        this.nss = nss;
        this.materia = materia;
        this.cuatrimestre = cuatrimestre;
    }



}




