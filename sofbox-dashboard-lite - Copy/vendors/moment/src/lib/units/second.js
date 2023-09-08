import { makeGetSet } from 'ent/get-set';
import { addFormatToken } from 'mat/format';
import { addUnitAlias } from './aliases';
import { addRegexToken, match1to2, match2 } from 'se/regex';
import { addParseToken } from 'se/token';
import { SECOND } from './constants';

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

export var getSetSecond = makeGetSet('Seconds', false);
