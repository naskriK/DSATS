const ALPHA_REGEX = /^[a-zA-Z]+$/;
const FIRST_UPPERCASE_ASCII_CODE = 65;
const LAST_UPPERCASE_ASCII_CODE = 90;

export function sameCase(a: string, b: string): number {
  const isAlpha = [a, b].map((char) => ALPHA_REGEX.test(char));

  if (isAlpha.includes(false)) return -1;

  const isUpperCase = (char: string) =>
    char.charCodeAt(0) >= FIRST_UPPERCASE_ASCII_CODE &&
    char.charCodeAt(0) <= LAST_UPPERCASE_ASCII_CODE;

  const isSameCase = [a, b].map((char) => isUpperCase(char));

  const [firstChar, secondChar] = isSameCase;

  return firstChar === secondChar ? 1 : 0; // your code here
}
