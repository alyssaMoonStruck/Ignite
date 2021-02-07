import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import detailReducer from './detailReducer'

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
    detail: detailReducer,
    //user: userReducer,
})

export default rootReducer