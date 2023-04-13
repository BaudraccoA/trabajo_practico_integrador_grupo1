//toma el elemento y lo enlaza con la seccion correspondiente.
//Seccion "Que es ProAr"
const nosotros = document.getElementById('nosotros');
const btnQueEsProAr = document.querySelector('.headerPrincipal-nav-link[href="#nosotros"]');
btnQueEsProAr.addEventListener('click', () => {
  nosotros.scrollIntoView({ behavior: 'smooth' });
});

//seccion "Herramientas"
const herramientas = document.getElementById('container-herramientas');
const btnHerramientas = document.querySelector('.headerPrincipal-nav-link[href="#container-herramientas"]');
btnHerramientas.addEventListener('click', () => {
  herramientas.scrollIntoView({ behavior: 'smooth' });
});

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

// agregamos datos del tiempo desde la API:
/*const apiKey = '14e078517d799980eea13a8d7021b165';
const city = 'Cordoba'; // Reemplaza con la ciudad que deseo mostrar el clima

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector('.weather');
    weather.innerHTML = `${data.main.temp}°C, ${data.weather[0].description}`;
  })
  .catch(error => console.error(error));*/

