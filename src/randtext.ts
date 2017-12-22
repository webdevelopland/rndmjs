import { alphabet } from './dict';
import { randvalue } from './randvalue';

// Get random text (without numerals)
export function randtext(length: number): string {
  var trace: string = "";
  for (let i = 0; i < length; i++) {
    trace += randvalue(alphabet);
  }
  return trace;
}
