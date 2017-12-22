// More simple random function
export function rand(a: number, b: number): number {
  var c: number;
  var d: number;

  c = b - a;
  if (c < 0) {
    return -1;
  }
  d = Math.random() * c;
  d = Math.round(d);
  d += a;
  return d;
}
