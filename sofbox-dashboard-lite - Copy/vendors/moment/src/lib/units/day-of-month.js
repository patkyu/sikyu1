import { makeGetSet } from 'ent/get-set';
import { addFormatToken } from 'mat/format';
import { addUnitAlias } from './aliases';
import { addRegexToken, match1to2, match2 } from 'se/regex';
import { addParseToken } from 'se/token';
import { DATE } from './constants';
import toInt from 'ls/to-int';

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
});

// MOMENTS

export var getSetDayOfMonth = makeGetSet('Date', true);
