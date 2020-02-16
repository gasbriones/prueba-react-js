import React, {useEffect} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {MainLayout} from './containers';
import store from './store/redux-store';
import getLanguage from "./lang";
import languageActions from "./actionsCreators/language_actions";
import {STORAGE_NAME} from "./constants/constants";
import './App.css';


const App = () => {

    useEffect(() => {
        const getStore = window.localStorage.getItem(STORAGE_NAME);

        if (getStore) {
            const language = JSON.parse(getStore);
            const lang = getLanguage(language.shortName || '');
            store.dispatch(languageActions.setSelectedLanguage(language));
            store.dispatch(languageActions.loadLiterals(lang));
        } else {
            const lang = getLanguage();
            store.dispatch(languageActions.loadLiterals(lang));
        }
    }, []);

    return (
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route path="/" name="Home" component={MainLayout}/>
                </Switch>
            </HashRouter>
        </Provider>
    );
};


export default App;
