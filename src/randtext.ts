import { alphabet } from './dict';
import { randCustomString } from './rand-custom-string';

// Get random text (without numerals)
export function randtext(length: number): string {
  return randCustomString(alphabet, length);
}
