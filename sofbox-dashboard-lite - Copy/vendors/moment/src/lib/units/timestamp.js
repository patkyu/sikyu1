import { addFormatToken } from 'mat/format';
import { addRegexToken, matchTimestamp, matchSigned } from 'se/regex';
import { addParseToken } from 'se/token';
import toInt from 'ls/to-int';

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});
