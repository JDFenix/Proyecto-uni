 class Persona {
    
    nombre;
    apellido_paterno;
    apellido_materno;
    fecha_nacimiento;
    correo;
    password;
    constructor(nombre, apellido_paterno, apellido_materno, fecha_nacimiento, correo, password) {
        this.nombre = nombre;
        this.apellido_paterno = apellido_paterno;
        this.apellido_materno = apellido_materno;
        this.fecha_nacimiento = fecha_nacimiento;
        this.correo = correo;
        this.password = password;
        
    }

    actualizar_correo = function (correo) {
        this.correo = correo
        return correo;
    }
    actualizar_password = function (password) {
        this.password = password
        return password;

    }

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
    

    


}








