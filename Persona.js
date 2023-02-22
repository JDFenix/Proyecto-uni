class Persona {
    nombre;
    apellido;
    fecha;
    

    constructor(nombre, apellido, fecha) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.fecha = fecha;
    
    }
        // this.correo = correo;
        // this.password = password;
        
    }

    // actualizar_correo = function (correo) {
    //     this.correo = correo
    //     return correo;
    // }
    // actualizar_password = function (password) {
    //     this.password = password
    //     return password;

    // }

    calcular_edad = function () {
        let fecha_actual = new Date();
        let fecha_nacimiento = new Date(this.fecha_nacimiento);
        let edad = fecha_actual.getFullYear() - fecha_nacimiento.getFullYear();
        let mes = fecha_actual.getMonth() - fecha_nacimiento.getMonth();

        if (mes < 0 || (mes === 0 && fecha_actual.getDate() < fecha_nacimiento())) {
            edad--;
        }
        return parseInt(edad);
    }
    verificar_password = function () {
        if (this.password === password) return true;
        else return false;



    }
    

    











