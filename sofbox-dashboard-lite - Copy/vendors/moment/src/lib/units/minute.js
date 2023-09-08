import { makeGetSet } from 'ent/get-set';
import { addFormatToken } from 'mat/format';
import { addUnitAlias } from './aliases';
import { addRegexToken, match1to2, match2 } from 'se/regex';
import { addParseToken } from 'se/token';
import { MINUTE } from './constants';

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

export var getSetMinute = makeGetSet('Minutes', false);
