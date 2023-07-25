/*const pokedexDiv = document.getElementById('pokedex');

// Función para obtener datos de la PokeAPI
async function obtenerDatosPokemon() {
  const url = 'https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener datos del Pokémon', error);
  }
}

// Función para mostrar los detalles de un Pokémon en la Pokédex
function mostrarDetallesPokemon(pokemon) {
  const pokemonDiv = document.createElement('div');
  pokemonDiv.classList.add('pokemon');

  const nombre = document.createElement('h2');
  nombre.textContent = pokemon.name.toUpperCase();

  const imagen = document.createElement('img');
  imagen.src = pokemon.image;
  imagen.alt = pokemon.name;

  const tipos = document.createElement('p');
  tipos.textContent = `Tipos: ${pokemon.types.join(', ')}`;

  pokemonDiv.appendChild(nombre);
  pokemonDiv.appendChild(imagen);
  pokemonDiv.appendChild(tipos);

  pokedexDiv.appendChild(pokemonDiv);
}

// Cargar y mostrar los detalles de todos los Pokémon en la Pokédex
async function cargarPokedex() {
  const pokemons = await obtenerDatosPokemon();

  pokemons.forEach(pokemon => {
    mostrarDetallesPokemon(pokemon);
  });
}

cargarPokedex();
*/



const express = axios('express');
const cors = axios('cors');
const app = express();

// Configurar CORS para permitir todas las solicitudes de cualquier origen
app.use(cors());

// Resto de la configuración del servidor y definición de puntos finales de la API aquí
// ...

// Puerto en el que la API escuchará las solicitudes
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor de la API iniciado en http://localhost:${PORT}`));




window.onload = function() {
    fetch('https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json')
      .then(response => response.json())
      .then(data => mostrarDatos(data))
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  };
  
  function mostrarDatos(data) {
    const titulo = document.createElement('h2');
    titulo.textContent = data.titulo;
  
    const descripcion = document.createElement('p');
    descripcion.textContent = data.descripcion;
  
    const contenidoDiv = document.getElementById('contenido');
    contenidoDiv.appendChild(titulo);
    contenidoDiv.appendChild(descripcion);
  
    data.items.forEach(item => {
      const itemDiv = document.createElement('div');
  
      const itemTitulo = document.createElement('h3');
      itemTitulo.textContent = item.titulo;
  
      const itemContenido = document.createElement('p');
      itemContenido.textContent = item.contenido;
  
      itemDiv.appendChild(itemTitulo);
      itemDiv.appendChild(itemContenido);
      contenidoDiv.appendChild(itemDiv);
    });
  }