class Persona {
    nombre;
    apellido;
    fecha;
    corre;
    contraseña;

    constructor(nombre, apellido, fecha,correo,contraseña) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.fecha = fecha;
      this.correo = correo;
      this.password = contraseña;
    
    }
        
        
    

     actualizar_correo = function (correo) {
         this.correo = correo;
         return correo;
     }
     actualizar_password = function (password) {
         this.password = password;
         return password;
     }
     


    login(alumnos){
        let result = alumnos.find(({ correo }) => correo === this.correo);
        if(result == undefined){
            return "El usuario no se encuentra registrado";
        } 
        else{
            
            return result.password == this.password ? true : 'Contraseña incorrecta';
             
        }

        
    }
}

    











