class Persona {
    Nombre;
    Apellidos;
    F_nacimiento;
    constructor(nombre,apellidos,f_nacimiento){
        this.Nombre= nombre;
        this.Apellidos= apellidos;
        this.F_nacimiento= f_nacimiento
        //this.#id = this.#crearId();
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
