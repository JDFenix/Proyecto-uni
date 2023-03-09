function obtenerCheckboxSeleccionados() {
  const checkboxes = document.querySelectorAll('input[name="materias[]"]:checked');
  const nombresCheckbox = Array.from(checkboxes, checkbox => checkbox.nextElementSibling.innerText.trim());
  console.log(nombresCheckbox);
  
  return nombresCheckbox;
  
}

