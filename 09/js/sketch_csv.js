var pokemonList = [];
var pokemonName = [];
var pokemonHeight = [];
var pokemonWeight = [];
var randomPokemon;
var index = 0;

function preload() {
  pokemons = loadStrings('pokemon.csv');
}

function setup() {

  createCanvas(800,600);
  background(0);
  for(let i=1; i<pokemons.length; i++){
    pokemonList = pokemons[i].split(/,/);
    pokemonName.push(pokemonList[0]);
    pokemonHeight.push(Number(pokemonList[1]));
    pokemonWeight.push(Number(pokemonList[2]));
  }
}

function mousePressed(){
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(20);
  text(pokemonName[index],map(pokemonWeight[index],0,1200,100,width-100),map(pokemonHeight[index],0,20,100,height-100));
  index ++;

  if (index >20){
    index = 0;
    console.log("data all printed");
  }
  return false;
}