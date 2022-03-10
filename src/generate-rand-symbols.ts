import { rand } from './rand';

// Generate random symbols
export function generateRandSymbols(radix: number, length: number): string {
  if (radix < 2) {
    radix = 2;
  }
  if (radix > 36) {
    radix = 36;
  }
  let symbols: string = '';
  for (let i = 0; i < length; i++) {
    symbols += rand(0, radix - 1).toString(radix);
  }
  return symbols;
}
