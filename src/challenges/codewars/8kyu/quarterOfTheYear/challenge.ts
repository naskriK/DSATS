const MONTH_IN_QUARTER = 3;

export function quarterOf(month: number): number {
  return Math.ceil(month / MONTH_IN_QUARTER);
}
