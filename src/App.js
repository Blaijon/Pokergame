import React, { Component } from 'react';
import {applyMiddleware, createStore} from 'redux';

import './App.css';
// --------- Components ---------
import Buttons from './js/components/Buttons';
import DeckHtml from './js/components/DeckHtml';
import CenterCards from './js/components/CenterCards';
import Player from './js/components/Player';

// ------- Redux Import Files ---------
import {Provider} from 'react-redux';
import rootReducer from './js/reducers/rootReducer';
import{ composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk'



// --- Creating Redux Store ---
const middleware = [logger,thunk]; // Using logger to see State change in the console
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware)),
);
// -------- Main component --------
class App extends Component {
  render() {
    return (
      // --- Giving Redux Store Access To all App's child components Child ----
      <Provider store={store}>
        <div className="container">
          <div className="poker-table">
            <img src="https://www.cardschat.com/resources/oddsCalc/img/field.png" alt=""></img>
            <CenterCards/>
            <DeckHtml/>
            <Player/>
            <Buttons/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
