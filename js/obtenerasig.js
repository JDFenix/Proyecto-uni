function obtenerCheckboxSeleccionados() {
    // Obtener todos los checkbox con nombre "materias[]"
    const checkboxes = document.querySelectorAll('input[name="materias[]"]:checked');
    
    // Obtener los nombres de los checkbox seleccionados
    const nombresCheckbox = Array.from(checkboxes).map(checkbox => checkbox.nextElementSibling.textContent.trim());
    console.log(nombresCheckbox);
    // Retornar un array con los nombres de los checkbox seleccionados
    return nombresCheckbox;

  }