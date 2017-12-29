import { generateRandSymbols } from './generate-rand-symbols';

// Get random hex color
export function randcolor(): string {
  return '#' + generateRandSymbols(16, 6);
}
