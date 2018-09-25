import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// -- This is pulling the specific function out the action file

const Player = ({points}) => (
        <Fragment>
          <div className="character-container">
            <div className="points">
              <h4>{points}</h4>
            </div>
            <div className="character-image">
              <img src="https://imgur.com/I80W1Q0.png" alt=""/>
            </div>
          </div>
        </Fragment>
    );

//----- Connecting Toggle to our redux store
const mapStateToProps = state => ({
  points: state.pokergamestore.points,
});

// ------- Connecting Actions as props to component from Action File -------
const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

//----- Connecting Toggle to our redux store
export default connect(mapStateToProps, mapDispatchToProps)(Player);
