//subclase Alumno
class Alumno extends Persona  {
      matricula
       nss;
    
    
    constructor( nombre, apellido, fecha,correo,contraseña,matricula, nss) {
        super(nombre, apellido, fecha,correo,contraseña);
       
         this.matricula=matricula;
         this.nss = nss;
        
    }


//     agregar_materia = function (materias) {
//         this.materias.push(materias);
//         return materias;
//     }


 }




