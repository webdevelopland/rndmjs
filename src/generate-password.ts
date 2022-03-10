import { shuffle } from './shuffle';
import { randvalue } from './randvalue';
import { randCustomString } from './rand-custom-string';

// Generate password from several dicts
export function generatePassword(length: number, ...dicts: string[][]): string {
  let password: string[] = [];
  const totalDict: string[] = [];
  for (const dict of dicts) {
    totalDict.push(...dict);
    password.push(randvalue(dict));
  }
  if (length >= dicts.length) {
    for (let i = 0; i < length - dicts.length; i++) {
      password.push(randvalue(totalDict));
    }
    shuffle(password);
    return password.join('');
  } else {
    return randCustomString(totalDict, length);
  }
}
