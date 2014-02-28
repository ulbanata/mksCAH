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
DeckOfCards.insert({deck: shuffle(WhiteCards.find().count()), color: 'white'});
DeckOfCards.insert({deck: shuffle(BlackCards.find().count()), color: 'black'});

//Get player objects
var player = {name: "Patrick", score: 0, hand:{}, czar: false, uID: 'hkjf'}

//Draw card
var draw = function(color) {
  //Searches for the first card ID in the array
  var cardID = DeckOfCards.find({ color: color }).fetch()[0].deck[0];
  //Determines which deck to pull data from
  if (color == "white"){
    //Grabs data from cards with card ID
    var card = WhiteCards.find( {cardID: cardID } ).fetch();
  } else {
    var card = BlackCards.find( {cardID: cardID } ).fetch();
  }
  //Removes the card array from the deck
  DeckOfCards.update({ color: color }, { $pop: { deck: -1 } } );
  return card[0];
}

// Return a card to the deck
var returnCard = function(card) {
  color = card.cardColor
  console.log(card.cardID)
  DeckOfCards.update({ color: color }, { $push: { deck: card.cardID } } )
}

a = draw('white');
console.log(a)
console.log(DeckOfCards.find( {color: 'white'} ).fetch()[0].deck.length)
returnCard(a);
console.log(DeckOfCards.find( {color: 'white'} ).fetch()[0].deck.length)

//Deal Cards to Players
var deal = function() {

}

//Pick Card Czar


//Begin Game
