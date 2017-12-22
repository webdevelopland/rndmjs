var alphabet: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numerals: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var sumerals: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var dict16: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

var Alphabet: string[] = [];
for (let letter of alphabet) {
  Alphabet.push(letter.toUpperCase());
}

var dict36: string[] = alphabet.concat(sumerals);

var extra: string[] = ["-", "_"];
var dict64: string[] = dict36.concat(extra).concat(Alphabet);

export {
  alphabet,
  numerals,
  sumerals,
  dict16,
  Alphabet,
  dict36,
  dict64
};
