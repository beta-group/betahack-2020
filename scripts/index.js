let pokemon = null; // object to hold pokemon data fetched by the API
let pokemonDescription = null; // object to hold the text description of the pokemon
const pokemonApi = "https://pokeapi.co/api/v2/pokemon";

function randomFetch(){
  let request = pokemonApi + "/" + getRandomNumber(); // https://pokeapi.co/api/v2/pokemon/150
  
  fetch(request)
    .then((response) => response.json())
    .then((pokemonData) => {
      pokemon = pokemonData;
      //console.log(pokemonData.name);
      return fetch(pokemon.species.url);
    })
    .then((response) => response.json())
    .then((speciesData) => {
      pokemonDescription = speciesData;
      updateScreen();
    });
}

function updateScreen() {
  /* grab containers to be updated */

  let name = document.querySelector(".pokemon-description .pokemon-name");
  let type = document.querySelector(".pokemon-description .pokemon-type");
  let info = document.querySelector(".pokemon-description .pokemon-info");
  let image = document.querySelector(".pokemon-image");
  let container = document.querySelector(".pokemon-window");

  /* store image as a seperate variable from the pokemon object */
  let pokemonImage = "url(" + pokemon.sprites.front_default + ")";

  /* Update the containers */
  container.style.setProperty("background", "#cccccc");
  container.style.setProperty("background-position", "center");
  /*name.innerHTML = pokemon.name;
  type.innerHTML = pokemon.types[0].type.name;
  info.innerHTML = pokemonDescription.flavor_text_entries[0].flavor_text;*/
  image.style.setProperty("background-image", pokemonImage);
}

function getRandomNumber() {
  const max = 150;
  return Math.floor(Math.random() * Math.floor(max));
}