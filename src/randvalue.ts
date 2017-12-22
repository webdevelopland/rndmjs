import { rand } from './rand';

// Get random value of an array
export function randvalue(array: any[]): any {
  return array[rand(0, array.length - 1)];
}
