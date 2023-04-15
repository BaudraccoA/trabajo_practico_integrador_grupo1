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

