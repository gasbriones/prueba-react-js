import Actions from '../actions/actions'

const initialState = [];

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.SET_DATA:
            return action.payload;
        default:
            break;
    }
    return state;
};

export default dataReducer;
