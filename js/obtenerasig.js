function obtenerCheckboxSeleccionados() {
  const checkboxes = document.querySelectorAll('input[name="materias[]"]:checked');
  const nombresCheckbox = Array.from(checkboxes, checkbox => checkbox.nextElementSibling.innerText.trim());
  console.log(nombresCheckbox);
  let datillos = localStorage.setItem("Datos-Alumnos", JSON.stringify(nombresCheckbox));
  console.log(JSON.parse(localStorage.getItem("Datos-Alumnos")));

  return nombresCheckbox;
  
}

