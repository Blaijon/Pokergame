// --- Action Types ----
import {
        GET_SHUFFLE_DECK,
        DEAL_BUTTON,CHECK_HAND,
        UPDATE_SELECTED_CARD_CONTAINER,
        KEEP_SELECTED_CARDS,
      } from '../actions/actions';

// ---- This entinre Store state ---
const initialState = {
  deck: [],
  centercards: [],
  selectedCenterCards: [],
  displayCenterCards: false,
  result: 'none',
  points: 0,
  displayDealButton: true,
  displayGoButton: false,
  displayKeepButton: false,
  displayDiscardButton: false,
};


export default function(state = initialState, action){
  // ---- (Destructing) Data being passed to Update the initial state ---
  const {
    type,
    shuffledDeckFromAction,
    centercardsFromAction,
    displayCenterCardsAction,
    resultFromAction,
    pointsFromAction,
    deckcontainerFromAction,
    updatecentercardsFromAction,
    keepSelectedCardsFromAction,
  } = action;


  switch(type){

    // Called after Component Mounts in
      case GET_SHUFFLE_DECK :
        return {
          ...state,
          deck: shuffledDeckFromAction,
        };

        case DEAL_BUTTON :
          return {
            ...state,
            // deck: shuffledDeckFromAction,
            centercards: centercardsFromAction,
            displayCenterCards: displayCenterCardsAction,
            deck: deckcontainerFromAction,
            displayDealButton: !state.displayDealButton,
            displayGoButton: !state.displayGoButton,

          };
          // -- Call When Go Button is Pressed ---
          case CHECK_HAND :
            return {
              ...state,
              // deck: shuffledDeckFromAction,
              result: resultFromAction,
              points: pointsFromAction,
              displayDealButton: !state.displayDealButton,
              displayGoButton: !state.displayGoButton,
              deck: deckcontainerFromAction,
              displayCenterCards: false,
            };
            // --- Called Whne Card is Clicked On -----
            case UPDATE_SELECTED_CARD_CONTAINER :
              return {
                ...state,
                selectedCenterCards: updatecentercardsFromAction,
                displayGoButton: false,
                displayKeepButton: true,
                displayDiscardButton: true,
                displayDealButton: false,
              };

              // --- Called When Keep Button is clicked ---
              case KEEP_SELECTED_CARDS :
                return {
                  ...state,
                  selectedCenterCards: keepSelectedCardsFromAction,
                  displayGoButton: true,
                  displayKeepButton: !state.displayKeepButton,
                  displayDiscardButton: !state.displayDiscardButton,
                };

    default:
      return state;
  }
}
