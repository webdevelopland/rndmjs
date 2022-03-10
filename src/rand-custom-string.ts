import { randvalue } from './randvalue';

// Get random string with custon dict
export function randCustomString(dict: string[], length: number): string {
  let trace: string = '';
  for (let i = 0; i < length; i++) {
    trace += randvalue(dict);
  }
  return trace;
}
