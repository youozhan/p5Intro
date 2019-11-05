var pokemonList = [];
var randomPokemon;

function preload() {
  pokemonList = loadStrings('pokemon.csv');
}

function setup() {
  noCanvas();
  // var url = 'https://pokeapi.co/api/v2/pokemon/';
  // loadJSON(url, gotData);
  
  console.log(pokemonList);

  let button = select('#button');
  button.mousePressed(function(){
    createP(random(pokemonList));
  });
}

// function gotData(data){

//   var length = data.results.length; 
//   console.log(length);

//   for (let i = 0; i < length; i++ ){
//     pokemonList.push(data.results[i].name);
//   }
// }