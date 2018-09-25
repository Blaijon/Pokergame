import React, { Fragment,Component } from 'react';
import { connect } from 'react-redux';

// -- This is pulling the specific function out the action file
import { bindActionCreators } from 'redux';
import { getShuffleDeck, updateSelectedCards} from '../actions/actions';

class CenterCards extends Component{
constructor(){
    super()
    this.displayCenterCards = this.displayCenterCards.bind(this);
  }

// -- Function Called When Cards are clicked ---
selectedCard(centercardSuit, centercardVaule){

  const { updateSelectedCards } = this.props; // --- Action ---
  const { selectedCenterCards } = this.props; // --- State From Reducer File

   var tempCardContainer = {
     suit : centercardSuit,
     vaule : centercardVaule,
   }

   // ---- Action ----
    updateSelectedCards(tempCardContainer, selectedCenterCards);
}


  displayCenterCards(){
    const { centercards } = this.props; // --- State of center card array (in reducer file)
    const { displaycentercards } = this.props; //---- Toogles center cards to display
      
    // Display Center Cards
      return centercards.map((centercard, index) => {
        if (displaycentercards === true) {
          return(
            // --- functioon up top is called when clickd -----
            <div  onClick={(centercardSuit, centercardVaule) => this.selectedCard(centercard.suit,centercard.vaule)}  className="card-center1" key={index}>
              <div className="thefront">
                <img src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695" alt=""/>
              </div>
              <div className="theback">
                <img src = {centercard.imgName} alt=""/>
              </div>
            </div>
          )
        } else{
          '';
        }
      })
  }







    render() {

      return (
        <Fragment>
          <div className="cards-center-container">
            {this.displayCenterCards()}
          </div>
        </Fragment>
      );
    }
  }

  // ----- Connecting Redux State from to Component Reducer File----
const mapStateToProps = state => ({
  centercards: state.pokergamestore.centercards,
  displaycentercards: state.pokergamestore.displayCenterCards,
  selectedCenterCards: state.pokergamestore.selectedCenterCards,
});

// ------- Connecting Actions as props to component from Action File -------
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getShuffleDeck: getShuffleDeck,
  updateSelectedCards: updateSelectedCards,
}, dispatch);

//----- Connecting CenterCards to our redux store
export default connect(mapStateToProps, mapDispatchToProps)(CenterCards);
