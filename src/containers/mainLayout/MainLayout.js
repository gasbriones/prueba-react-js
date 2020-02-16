import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Redirect, Route, Switch, NavLink} from 'react-router-dom';
import {Container} from 'reactstrap';
import {Image} from 'react-bootstrap';

import LanguageSelect from "../../components/languageSelect/LanguageSelect";
import getLanguage from "../../lang";
import {DEFAULT_LANGUAGE, LANGUAGES} from '../../constants/constants';
import languageActions from '../../actionsCreators/language_actions'

import _routes from '../../_routes';
import _navigator from "../../_navigator";
import './style.scss';


const MainLayout = (props) => {

    const {language: {currentLanguage, literals}, dispatch} =  props;
    const [collapse, setCollapse] = useState(false);

    const setStoredLanguage = (languageSelected) => {
        const language = getLanguage(languageSelected.shortName);
        dispatch(languageActions.setSelectedLanguage(languageSelected));
        dispatch(languageActions.loadLiterals(language));
    };

    return (
        <div className={'app full-height ' + (!collapse ? 'no-collapse' : 'collapse')}>
            <header className='header'>
                <i className={(!collapse ? 'fa fa-close' : 'fa fa-bars') + ' collapse-btn'}
                   onClick={() => setCollapse(!collapse)}/>
                <LanguageSelect
                    languages={LANGUAGES}
                    currentLanguage={currentLanguage}
                    callback={setStoredLanguage}
                    title={literals.SELECT_YOUR_LANGUAGE}
                    defaultLanguage={DEFAULT_LANGUAGE}
                />
            </header>
            <aside className='aside'>
                <a target="_blank" href="https://www.ricoh.es/index.html" className='aside__logo'>
                    {!collapse ? (<Image src='/images/ricoh-hd_logo.png'/>) :
                        <Image src='/images/Ricoh-logo-min.png' width='20'/>}
                </a>

                <ul className='aside__menu'>
                    {_navigator.map((link, idx) => (
                        <li key={idx}>
                            <NavLink to={link.url}>
                                {!collapse ? literals[link.name] : (<i className={link.icon} />)}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
            <main className='main full-height'>
                <Container fluid className='d-flex full-height p-0'>
                    <Switch>
                        {_routes.map((route, idx) => (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    params={route.params}
                                    exact={route.exact}
                                    render={props => (
                                        // eslint-disable-next-line react/jsx-props-no-spreading
                                        <route.component {...props} />
                                    )}
                                />
                            )
                        )}
                        <Redirect from="/" to="/home"/>
                    </Switch>
                </Container>
            </main>
        </div>
    );
};


MainLayout.defaulProps = {
    language: {},
    dispatch: () => {
    }
};

MainLayout.propTypes = {
    language: PropTypes.object,
    dispatch: PropTypes.func
};


const mapStateToProps = state => {
    const {language} = {...state};

    return {
        language
    }
};

export default connect(mapStateToProps)(MainLayout)


