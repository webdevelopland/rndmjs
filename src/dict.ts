const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numerals: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const dict16: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const special: string[] = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '/', '\\', '[', ']', '{', '}', '.', ';', ':', '`', '"', "'", ',', '<', '>', '?', '~', '|'];

const Alphabet: string[] = [];
for (const letter of alphabet) {
  Alphabet.push(letter.toUpperCase());
}

const dict36: string[] = alphabet.concat(numerals);

const extra: string[] = ['-', '_'];
const dict64: string[] = dict36.concat(extra).concat(Alphabet);

export {
  alphabet,
  numerals,
  dict16,
  Alphabet,
  dict36,
  dict64,
  special
};
