type Direction = "R" | "L";

export function flip(dir: Direction, arr: number[]): number[] {
  const sort = arr.sort((a, b) => (a -= b));

  if (dir === "L") {
    return arr.reverse();
  }

  return sort;
}
