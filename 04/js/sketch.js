var dancingWords = [];
var texts;

class DanceSpan {
  constructor(element, x, y) {
    element.position(x, y);
    this.element = element;
    this.x = x;
    this.y = y;
  }

  brownian() {
    this.x += random(-6, 6);
    this.y += random(-6, 6);
    this.element.position(this.x, this.y);
  }
}

function setup() {
  var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=rain&api-key=7tGOPRANNVIG9ETUezuZGGGi7TT7LmEd';
  loadJSON(url, gotText);
}

function draw() {
  for (let i = 0; i < dancingWords.length; i++) {
    dancingWords[i].brownian();
  }
}

function gotText(nytimes){
  console.log("request sent");
  texts = nytimes.response.docs[0].headline.main;
  console.log(nytimes.response.docs[0].headline.main);
  console.log(texts.length);

  createP(texts).addClass('text');

  for (let i = 0; i < texts.length; i++) {
    const paragraph = texts[i];
    const words = paragraph.split(' ');
    for (let j = 0; j < words.length; j++) {
      const spannedWord = createSpan(words[j]);
      const dw = new DanceSpan(spannedWord, random(600), random(200));
      dancingWords.push(dw);
    }
  }

  setTimeout(gotText, 3000);
}
