import Actions from '../actions/actions'
import {STORAGE_NAME} from "../constants/constants";

const initialState = {
    currentLanguage: {
        id: 1,
        name: 'ENGLISH',
        shortName: 'En',
        imageUrl: '/images/icons/languages/england.png',
        iframeUrl: 'https://www.ricoh.co.uk/index.html'
    },
    literals: {}
};

const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.SET_LANGUAGE:
            window.localStorage.setItem(STORAGE_NAME, JSON.stringify(action.payload));
            return {...state, currentLanguage: action.payload};
        case Actions.LOAD_LITERALS:
            return {...state, literals: action.payload};
        default:
            break;
    }
    return state;
};

export default languageReducer;
