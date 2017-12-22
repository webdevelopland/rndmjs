import { dict64 } from './dict';
import { randvalue } from './randvalue';

// Get random string with 64 symbals lib [a-z,A-Z,0-9,-,_]
export function randstr64(length: number): string {
  var trace: string = "";
  for (let i = 0; i < length; i++) {
    trace += randvalue(dict64);
  }
  return trace;
}
