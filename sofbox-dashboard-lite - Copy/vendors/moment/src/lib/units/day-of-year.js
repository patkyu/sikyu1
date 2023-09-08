import { addFormatToken } from 'mat/format';
import { addUnitAlias } from './aliases';
import { addRegexToken, match3, match1to3 } from 'se/regex';
import { daysInYear } from './year';
import { createUTCDate } from 'ate/date-from-array';
import { addParseToken } from 'se/token';
import toInt from 'ls/to-int';

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

export function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}
