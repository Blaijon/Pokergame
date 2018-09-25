

import { make_deck, shuffleDeck, dealTheDeck, twoOfAKind } from '../functions/CustomFunction.js';

// ---- Action.Type Constant
export const GET_SHUFFLE_DECK = 'GET_SHUFFLE_DECK';
export const DEAL_BUTTON = 'DEAL_BUTTON';
export const CHECK_HAND = 'CHECK_HAND';
export const UPDATE_SELECTED_CARD_CONTAINER = 'UPDATE_SELECTED_CARD_CONTAINER';
export const KEEP_SELECTED_CARDS =  'KEEP_SELECTED_CARDS';
export const DISCARD_SELECTED_CARDS = 'DISCARD_SELECTED_CARDS';



export function getShuffleDeck(){
  return async function(dispatch){
    const deck = [];

    // -- Call from Custom FunctionFile ---
    const stack_deck = await make_deck(deck);
    const shuffledDeck = await shuffleDeck(stack_deck);

    return dispatch({
      type: GET_SHUFFLE_DECK,
      shuffledDeckFromAction: shuffledDeck,

    })
  }
}

export function dealButton(deck){
  return async function(dispatch){
    var newdeck = [...deck];
    var tempcontainercards = [];
    var centertablecards = [];

    // -- Called from CUSTOM Function File ----
    await dealTheDeck(tempcontainercards, newdeck);
    centertablecards = tempcontainercards.splice(0,5);

    return dispatch({
      type: DEAL_BUTTON,
      centercardsFromAction: centertablecards,
      displayCenterCardsAction: true,
      deckcontainerFromAction: newdeck,
    })
  }
}



export function checkHand( centertablecards, points,deck){
  return async function(dispatch){
    // const newdeck = deck;
    var tempcontainercards = [...centertablecards];
    var cardDeck = [...deck];
    var result;
    // var currentpoints = ...points;
    var finalpoints = points;
    var twoOFKindResult = await twoOfAKind(tempcontainercards);

// && fivecards === false
    if(twoOFKindResult === true){
      result = 'twoOfKind';
      finalpoints = finalpoints + 100;
    } else{
      result = false;
    }
    for(var i = 0; i < tempcontainercards.length; i++){
      cardDeck.push(tempcontainercards[i]);
    }

    // ------ Need To Complete 5 consecutive in a row function ----------


    // ------ Need To Complete 5 consecutive in a row function ----------

    return dispatch({
      type: CHECK_HAND,
      resultFromAction: result,
      pointsFromAction: finalpoints,
      deckcontainerFromAction: cardDeck,
      displaycentercards: false,
    })
  }
}

export function updateSelectedCards(selectedCard, selectedCenterCards){
  return async function(dispatch){
    var centerCardContainers = [selectedCard, ...selectedCenterCards];

    // -----Take out duplicate objects --------
    var obj = centerCardContainers.reduce( ( acc, c ) =>  Object.assign(acc, {[c.vaule]:c.suit}) , {});
    var collectionOfCards = Object.keys( obj )
              .map( s => ({ vaule : s, suit : obj[ s ] }) );


    return dispatch({
      type: UPDATE_SELECTED_CARD_CONTAINER,
      updatecentercardsFromAction: collectionOfCards,
    })
  }
}

// --- Called When Keep Button is Clicked ---
export function keepSelectedCards(selectedCenterCards){
  return async function(dispatch){
    var centerCardContainer = [...selectedCenterCards];

    //Remove all elements in selectedCenterCards state
    centerCardContainer.splice(0 , centerCardContainer.length);

    return dispatch({
      type: KEEP_SELECTED_CARDS,
      keepSelectedCardsFromAction: centerCardContainer,
    })
  }
}



// ---- Create Discard Button Action -----



// ---- CReate Discard Button Action -----
