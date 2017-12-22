import { rand } from './rand';

// Get random hex color
export function randcolor(): string {
  var hex: string = "";
  for (let i = 0; i < 6; i++) {
    hex += rand(0, 15).toString(16);
  }
  return "#" + hex;
}
