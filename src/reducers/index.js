import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';

//MULTIPLE REDUCER EXAMPLE
// const initState = {
//     name: "",
//     islOgged: false,
// }

// const userReducer = (state,action) => {
//     switch (action.type) {
//         default:
//             return {...state};
//     }
// }

const rootReducer = combineReducers({
    games: gamesReducer,
    //user: userReducer,
})

export default rootReducer