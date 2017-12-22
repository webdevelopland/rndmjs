import { rand } from './rand';

// Get random string
export function randstr(length: number): string {
  var trace: string = "";
  for (let i = 0; i < length; i++) {
    trace += rand(0, 35).toString(36);
  }
  return trace;
}
