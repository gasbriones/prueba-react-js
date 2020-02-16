import Actions from '../actions/actions'

const setSelectedLanguage = (data) => ({
    type: Actions.SET_LANGUAGE,
    payload: data
});

const loadLiterals = (data) => ({
    type: Actions.LOAD_LITERALS,
    payload: data
});

export default {
    setSelectedLanguage,
    loadLiterals
}
