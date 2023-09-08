import { addFormatToken } from 'mat/format';
import { addUnitAlias } from './aliases';
import { addRegexToken, match1 } from 'se/regex';
import { addParseToken } from 'se/token';
import { MONTH } from './constants';
import toInt from 'ls/to-int';

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

export function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}
