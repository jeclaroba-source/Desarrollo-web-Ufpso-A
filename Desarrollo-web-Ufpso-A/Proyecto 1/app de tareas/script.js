// 1. Selección de elementos del DOM
const tareaInput = document.querySelector('#tareaInput');
const formulario = document.querySelector('#formulario-tareas');
const listaTareas = document.querySelector('#listaTareas');
const contadorElemento = document.querySelector('#contador');

// 2. Variable de estado (Contador)
let totalTareas = 0;

// 3. Función para actualizar el contador en el HTML
const actualizarContador = () => {
    contadorElemento.textContent = totalTareas;
};

// 4. Función para agregar una tarea
const agregarTarea = (evento) => {
    evento.preventDefault(); // Evita que la página se recargue

    const textoTarea = tareaInput.value.trim();

    // Validación: No permitir tareas vacías
    if (textoTarea === "") {
        alert("Por favor, escribe una tarea válida.");
        return;
    }

    // Crear el elemento de la lista usando Plantillas Literales
    const nuevaTarea = document.createElement('li');
    nuevaTarea.innerHTML = `
        <span>${textoTarea}</span>
        <button class="btn-eliminar">Eliminar</button>
    `;

    // Agregar evento al botón eliminar de esta tarea específica
    const botonEliminar = nuevaTarea.querySelector('.btn-eliminar');
    botonEliminar.addEventListener('click', () => eliminarTarea(nuevaTarea));

    // Insertar en el DOM
    listaTareas.appendChild(nuevaTarea);

    // Actualizar estado
    totalTareas++;
    actualizarContador();

    // Limpiar input
    tareaInput.value = "";
    tareaInput.focus();
};

// 5. Función para eliminar una tarea
const eliminarTarea = (elementoTarea) => {
    elementoTarea.remove();
    totalTareas--;
    actualizarContador();
};

// 6. Event Listeners
formulario.addEventListener('submit', agregarTarea);
}