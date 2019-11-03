var pokemonList = [];
var randomPokemon;

function preload() {
  // pokemons = loadStrings('all_pokemons.csv');
}

function setup() {
  var url = 'https://pokeapi.co/api/v2/pokemon/';
  loadJSON(url, gotData);

  console.log(pokemonList);

  let button = select('#button');
  button.mousePressed(function(){
    let span = createSpan(random(pokemonList));
  });
}

function draw(){

}

function gotData(data){

  var length = data.results.length; 
  console.log(length);

  for (let i = 0; i < length; i++ ){
    pokemonList.push(data.results[i].name);
  }
}