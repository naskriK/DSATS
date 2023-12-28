export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
  const doubleSonAge = sonYearsOld * 2;

  return Math.abs(dadYearsOld - doubleSonAge);
}
