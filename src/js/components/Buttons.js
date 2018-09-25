import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// --- Importing each needed Action Function for Component ----
import {  getShuffleDeck,
          dealButton,
          checkHand,
          keepSelectedCards,
      } from '../actions/actions';

class Buttons extends Component {

componentDidMount(){
  // --- Shuffling Deck After Component Mount ----
  const { getShuffleDeck } = this.props;
  getShuffleDeck(); // ---- Shuffling Deck in Action File ----
}

  render() {
    // ---- Using Redux State as props from Reducers File ---
    const {  deck,
             centercards,
             points,
             displayDealButton,
             displayGoButton,
             displayKeepButton,
             selectedCenterCards
           } = this.props;

           // --- Using Actions as Props ---
           const { dealButton, checkHand, keepSelectedCards } = this.props;

           let displayDealButtonCondition = displayDealButton ? <input onClick={() => {dealButton(deck)}} className="start-game-button" type="button" value="Deal"/> : <input style= {{display: `none`}} className="start-game-button" type="button" disabled value="Deal"/>;

           let displayGoButtonCondition = displayGoButton ? <input onClick={() => {checkHand(centercards, points,deck)}} className="call-button" type="button" value="GO"/> : <input style= {{display: `none`}} className="call-button" type="button" disabled value="GO"/>;

           let displayKeepButtonCondition = displayKeepButton ? <input onClick={() => {keepSelectedCards(selectedCenterCards)}} className="all-in-button" type="button" value="Keep"/> : <input style= {{display: `none`}} className="all-in-button" type="button" disabled value="Keep"/>;




    return (
      <Fragment>
        {/* ---- Game buttons Container ---- */}
        <div className="game-button-container">

          {displayKeepButtonCondition}
          {displayDealButtonCondition}
          {displayGoButtonCondition}

        </div>
      </Fragment>
    );
  }
}

// ----- Connecting Redux State from to Component Reducer File----
const mapStateToProps = state => ({
  deck: state.pokergamestore.deck,
  centercards: state.pokergamestore.centercards,
  points: state.pokergamestore.points,
  displayDealButton: state.pokergamestore.displayDealButton,
  displayGoButton: state.pokergamestore.displayGoButton,
  displayKeepButton: state.pokergamestore.displayKeepButton,
  displayDiscardButton: state.pokergamestore.displayDiscardButton,
  selectedCenterCards: state.pokergamestore.selectedCenterCards,
});

// ------- Connecting Actions as props to component from Action File -------
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getShuffleDeck: getShuffleDeck,
  dealButton: dealButton,
  checkHand: checkHand,
  keepSelectedCards: keepSelectedCards,
}, dispatch);

//----- Connecting Buttons component to our Redux store -------
export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
