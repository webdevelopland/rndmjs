import { dict64 } from './dict';
import { randCustomString } from './rand-custom-string';

// Get random string with 64 symbals dict [a-z,A-Z,0-9,-,_]
export function randstr64(length: number): string {
  return randCustomString(dict64, length);
}
