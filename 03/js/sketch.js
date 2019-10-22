var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=EGN1y8bqq1hQMR6BKWZ7QeHCBYXj7w4q";
var query = "&q=ryan+goslin"

function setup(){
  noCanvas();
  var url = api + apiKey + query;
  // var url = "http://api.giphy.com/v1/gifs/search?&api_key=EGN1y8bqq1hQMR6BKWZ7QeHCBYXj7w4q&q=ryan+goslin"
  console.log(url);
  loadJSON(url, gotData);
}

function gotData(giphy){
  for (var i = 0; i < giphy.data.length; i++){
    createImg(giphy.data[i].images.fixed_width.url);
  }
}
