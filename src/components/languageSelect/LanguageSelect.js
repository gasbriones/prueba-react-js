import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-bootstrap';
import './style.scss'

const LanguageSelect = (props) => {

    const {languages, currentLanguage, callback, title, defaultLanguage} = props;
    const [open, setOpen] = useState(false);
    const [languageSelected, setLanguageSelected] = useState(defaultLanguage);

    const selectedLanguage = (language) => {
        setLanguageSelected(language);
        callback(language);
    };

    useEffect(() => {
        setLanguageSelected(currentLanguage);
    }, [currentLanguage]);

    return (
        <div className='language'>
            <span className='language__current' onClick={() => setOpen(!open)}>
                <Image src={languageSelected.imageUrl}/>
            </span>
            {
                open && (
                    <div className='language__drop-down'>
                        <i className='fa fa-close language__drop-down__close'onClick={() => setOpen(false)}/>
                        <h5 className={'language__drop-down__title'}>{title}</h5>
                        <ul className='language__drop-down__list'>
                            {languages.map((language, idx) => (
                                <li key={idx}
                                    className={'language__drop-down__list-item ' + (language.shortName === languageSelected.shortName ? 'selected' : '')}>
                                    <Image src={language.imageUrl} onClick={() => selectedLanguage(language)}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div>
    )
};

LanguageSelect.defaulProps = {
    languages: [],
    callback: () => {},
    currentLanguage: {},
    title: '',
    defaultLanguage: ''
};

LanguageSelect.propTypes = {
    languages: PropTypes.array,
    callback: PropTypes.func,
    currentLanguage: PropTypes.object,
    title: PropTypes.string,
    defaultLanguage: PropTypes.string
};

export default LanguageSelect;

