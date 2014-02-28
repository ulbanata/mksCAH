//Shuffle White Card Deck
var shuffle = function(length) {
  var arr = []
  for(var i = 0; i < length; i++) {  //Need to figure out how to pull from the database
    arr.push(i);  //Creates the initial array
  }
  var randArr = [];  //Creates a holder array
  for(var i=0, x = arr.length; i < x; i++) {
    index = Math.floor(Math.random()*arr.length);  //Finds a random index
    randArr.push(arr[index]);  //Add random element to the random array
    arr.splice(index,1);  //Take the element from the holder array
  }
  console.log("Length: " + randArr.length)
  return randArr
}

DeckOfCards.remove({});
DeckOfCards.insert(shuffle(WhiteCards.find().count()));
DeckOfCards.insert(shuffle(BlackCards.find().count()));

//Get player objects
var player = {name: "Patrick", score: 0, hand:{}, czar: false}

//Deal Cards to Players
var deal = function() {

}

//Pick Card Czar


//Begin Game
