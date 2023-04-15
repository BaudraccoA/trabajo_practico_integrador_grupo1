// Obtener el elemento para mostrar la fecha y hora actual
const fechaHora = document.getElementById("fecha-hora");
		
// Función para actualizar la fecha y hora cada segundo
function actualizarFechaHora() {
  const ahora = new Date();
  const fecha = ahora.toLocaleDateString();
  const hora = ahora.toLocaleTimeString();
  fechaHora.textContent = `${fecha} - ${hora}`;
}

// Llamar a la función para actualizar la fecha y hora inicialmente
actualizarFechaHora();

// Llamar a la función cada segundo para actualizar la fecha y hora
setInterval(actualizarFechaHora, 1000);
