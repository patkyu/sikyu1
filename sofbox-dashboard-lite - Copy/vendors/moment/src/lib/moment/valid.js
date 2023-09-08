import { isValid as _isValid } from 'ate/valid';
import extend from 'ls/extend';
import getParsingFlags from 'ate/parsing-flags';

export function isValid () {
    return _isValid(this);
}

export function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

export function invalidAt () {
    return getParsingFlags(this).overflow;
}
