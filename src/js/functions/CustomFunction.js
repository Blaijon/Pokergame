// ---- Makes a Deck of 52 ---
export function make_deck(cards){

  // ---- Defining card ---
  let card = (suit, value) => {
    var imgName = `https://www.scientificpsychic.com/alpha/games/cardsets/h107/${suit}${value}.gif`
    var suitt = suit
    var valuee = value
    var impvaule = `${suit}${value}`
    return{imgName: imgName, suit: suitt, vaule: valuee, impvalue: impvaule}
  }

	let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
	let suits = ['hearts','diamonds','spades','clubs'];

// --- Pushing card object into Cards Array to make a deck
    for( let s = 0; s < suits.length; s++ ) {
        for( let v = 0; v < values.length; v++ ) {
            cards.push(card(suits[s], values[v]) );
        }
    }
    return cards;
}




//----- Shuffles Deck Function ----
export function shuffleDeck(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

    // --- While there remain elements to shuffle... ---
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // --- Swap it with the current element. ---
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  return array;
}



// --- Distrbutes 5 cards from Deck ---
export function dealTheDeck(tempcontainercards, new_deck){
  for (var i = 0; i < 5; i++) {
    tempcontainercards.push(new_deck[i]);
    new_deck.shift();
  }
}



// --- Checks For two of a kind when Go button is pressed ---
 export function twoOfAKind(containerofcards){
  var orginalCardContainer = containerofcards;
  var containerOfVaules = [];

  // --- Find the vaule of your 5 Cards ---
  containerOfVaules = orginalCardContainer.map((cards) => {
        return cards.vaule
  })

  // --- Check for duplicate values in your hand ---
  var nonDuplicateValues = new Set(containerOfVaules);

  if(orginalCardContainer.length !== nonDuplicateValues.size){
    // ---- If there are no duplicate values ---
    return true
  }
  return false;

}
