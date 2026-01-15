// --------------------------------------------------
// Referencias a los elementos del DOM
// --------------------------------------------------
const input = document.querySelector('#favchap');
const button = document.querySelector('#addButton');
const list = document.querySelector('#list');

// --------------------------------------------------
// Event Listener para el botón "Add Chapter"
// --------------------------------------------------
button.addEventListener('click', () => {

  // Verificar que el input NO esté vacío
  if (input.value.trim() !== '') {

    // Crear el li
    const li = document.createElement('li');

    // Crear el botón de borrar
    const deleteButton = document.createElement('button');

    // Asignar el texto del input al li
    li.textContent = input.value;

    // Asignar el texto ❌ al botón
    deleteButton.textContent = '❌';

    // Agregar el botón al li
    li.append(deleteButton);

    // Agregar el li a la lista
    list.append(li);

    // Limpiar el input
    input.value = '';
  }

  // Enviar el foco al input SIEMPRE
  input.focus();
});

// --------------------------------------------------
// Event Delegation para borrar capítulos
// --------------------------------------------------
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    list.removeChild(e.target.parentElement);
    input.focus();
  }
});
