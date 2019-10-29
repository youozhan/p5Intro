// Daniel Shiffman
// http://codingtra.in
// Earthquake Data Viz
// Video: https://youtu.be/ZiYdOwOrGyc

var mapimg;

var clat = 0;
var clon = 0;

var ww = 1024;
var hh = 512;

var zoom = 3;
var earthquakes;

function preload() {
  // The clon and clat in this url are edited to be in the correct order.
  mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' +
    clon + ',' + clat + ',' + zoom + '/' +
    ww + 'x' + hh +
    '?access_token=pk.eyJ1IjoieW91b3poYW4iLCJhIjoiY2syMmVmMWJ3MThvOTNjcXdlbGRwNWZkeCJ9.9y6QEuCzye7XsM5snvqxtg');

  // earthquakes = loadStrings('all_month.csv');
  // earthquakes = loadStrings('all_month.txt');
  // earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv');

}

function mercX(lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI / 4 + lat / 2);
  var c = PI - log(b);
  return a * c;
}


function setup() {
  var url = 'https://sheetsu.com/apis/v1.0su/efad54246a37';
  loadJSON(url, gotEarthquakeData);
}

function gotEarthquakeData(earthquakes){
  createCanvas(ww, hh);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapimg, 0, 0);

  var cx = mercX(clon);
  var cy = mercY(clat);

  for (var i = 1; i < earthquakes.length; i++) {
    // var data = earthquakes[i].split(/,/);
    //console.log(data);
    // var lat = data[1];
    // var lon = data[2];
    // var mag = data[4];

    var lat = Number(earthquakes[i].latitude);
    var lon = Number(earthquakes[i].longitude);
    var mag = Number(earthquakes[i].mag);

    console.log(lat + " " + lon + " " + mag);

    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;
    // This addition fixes the case where the longitude is non-zero and
    // points can go off the screen.
    if(x < - width/2) {
      x += width;
    } else if(x > width / 2) {
      x -= width;
    }
    mag = pow(10, mag);
    mag = sqrt(mag);
    var magmax = sqrt(pow(10, 10));
    var d = map(mag, 0, magmax, 0, 180);
    stroke(255, 0, 255);
    fill(255, 0, 255, 200);
    ellipse(x, y, d, d);
  }
}