class Administrador {
    correo_admin;
    contraseña;
  
    constructor(correo_admin, contraseña) {
      this.contraseña = contraseña;
      this.correo_admin = correo_admin;
    }
  }
  
  let administradores = JSON.parse(localStorage.getItem("Datos-Amons")) || [];
  
  function crearAdmon() {
    let correoig = document.getElementById("correoad").value;
    let contraseñaig = document.getElementById("contraseñaad").value;
  
    if (!correoig || !contraseñaig) {
      alert("Por favor, ingrese correo y contraseña.");
      return;
    }
  
    let admincreado = administradores.find(
      ({ correo, contraseña }) => correo === correoig && contraseña === contraseñaig
    );
  
    if (admincreado) {
      alert("Administrador ya registrado.");
    } else {
      let admon = new Administrador(correoig, contraseñaig);
      administradores.push(admon);
      localStorage.setItem("Datos-Amons", JSON.stringify(administradores));
      alert("Administrador registrado correctamente.");
    }
  }
  