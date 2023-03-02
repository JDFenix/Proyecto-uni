class Helper {
    static obtenerusuarioslocal(){
        let alumnos = [];
        let aregloalumno = JSON.parse( localStorage.getItem('Datos-Alumnos'));
        if(aregloalumno.length != 0){
            aregloalumno.forEach(userarray => {
                let alumnos002 =  new Persona(userarray.correo, userarray.contraseña);
                alumnos.push(alumnos002);
            });
        }
  

    }
        
}