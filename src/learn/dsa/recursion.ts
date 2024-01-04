/*
  Rekurencja - odwoływanie się funkcji do samej siebie.

  Rekurencja bazuje na używaniu jej samej do uzyskania danego efektu.

  Bazuje też na używaniu stanu w którym rekurencja się kończy.

  Podstawowa funkcja rekurencyjna która wypisuje liczby od 1 do 5.

*/

const printRecursiveNumbers = (start: number): void | null => {
  if (start > 5) return null;
  console.log(start);
  return printRecursiveNumbers(start + 1);
};

printRecursiveNumbers(1);

/*
  Zawsze aby nasza rekurencyjna funkcja się skończyła potrzebny jest warunek zakańczający ją
  ^^ if(start > 5) return null;

  Będzie się wywoływać dopóki start nie będzie większe od 5, wtedy po prostu się już więcej nie wywoła.

  Używanie rekurencji jest mocno opłacalne w momencie korzystania z graphów,tree structure albo backtracking algorithms.
  Ale o tym dużo później, bo jeszcze sam tam nie dotarłem.. :D

  Teraz przećwiczymy po prostu dużo funkcji rekurencyjnych..
*/

const addNumbersFromEnd = (end: number): number => {
  if (end === 1) return 1;
  return end + addNumbersFromEnd(end - 1);
};

const productNumbersFromNumber = (num: number): number => {
  if (num === 1) return 1;

  return num * productNumbersFromNumber(num - 1);
};

/*
  Zadania z kursu
*/

function power(num: number, powerNum: number): number {
  if (powerNum === 0) return 1;
  return num * power(num, --powerNum);
}

function factorial(num: number): number {
  if (num === 0) return 1;
  return num * factorial(--num);
}

function productOfArray(nums: number[]): number {
  if (nums.length === 0) return 1;
  return nums[0] * productOfArray(nums.splice(1));
}

function recursiveRange(num: number): number {
  if (num === 0) return 0;

  return num + recursiveRange(num - 1);
}

function fib(num: number): number {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

function reverse(s: string): string {
  if (s.length === 0) return "";

  return s.charAt(s.length - 1) + reverse(s.slice(0, s.length - 1));
}
