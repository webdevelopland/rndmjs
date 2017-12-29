import { generateRandSymbols } from './generate-rand-symbols';

// Get random string
export function randstr(length: number): string {
  return generateRandSymbols(36, length);
}
