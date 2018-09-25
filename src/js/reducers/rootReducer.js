
import { combineReducers } from 'redux';
import pokergamestore from './reducer';


// --- Combine store into one ---
const rootReducer = combineReducers({
  pokergamestore: pokergamestore,
});

export default rootReducer;
