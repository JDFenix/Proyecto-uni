//subclase Alumno
class Alumno extends Persona  {
      matricula;
      promedio_bachillerato;
      correo;
      contraseña;
       nss;
    
    //Se crea una clase alumno con los anteriores datos
    constructor(nombre, apellido_pat,apellido_mat, nss, fecha,promedio_bachillerato,correo,contraseña,matricula) {
        super(nombre, apellido_pat,apellido_mat, fecha)
       
         this.matricula=matricula;
         this.promedio_bachillerato=promedio_bachillerato;
         this.correo=correo;
         this.contraseña=contraseña;
         this.nss = nss;
        
    }



//     agregar_materia = function (materias) {
//         this.materias.push(materias);
//         return materias;
//     }
 }




