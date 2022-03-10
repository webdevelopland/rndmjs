// More simple random function
export function rand(a: number, b: number): number {
  let c: number;
  let d: number;

  c = b - a;
  if (c < 0) {
    return -1;
  }
  d = Math.random() * c;
  d = Math.round(d);
  d += a;
  return d;
}
