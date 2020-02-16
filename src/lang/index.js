import {En} from './english';
import {Fr} from './french';
import {Gr} from './german';
import {It} from './italian';
import {Pt} from './portuguese';
import {Es} from './spanish';


import {DEFAULT_LANGUAGE} from "../constants/constants";

const langs = {
    En,
    Fr,
    Gr,
    It,
    Pt,
    Es
};

export default function (langSelected = DEFAULT_LANGUAGE) {
    return langs[langSelected];
};