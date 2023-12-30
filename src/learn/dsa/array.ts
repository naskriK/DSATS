// DSA - Array Structure

/*

  1. Co to jest tablica?

  Array - Tablica - Lista elementów.

  W tablicy możemy przechowywać nieskonczoną ilość elementów tego samego typu, bądź różnego, zależne od naszego otypowania.
  Pamięc jest ustalana po kolei, czyli kolejny item ma adres w pamięci (poprzedni+1) czyli n+1.
  Jest to najczęściej wykorzystywana struktura danych w programowaniu.

  const arr = [];

  const arr = [1,2,3];

*/

const arr: number[] = [1, 2, 3];

const strArr: string[] = ["1", "2", "3"];

/*
  Typescript umożliwia tworzenie też tak zwanych tupli, czyli tablic o określonej ilości elementów z okreslonymi typami
*/

const tuple: [number, boolean] = [1, true];

/*
  2. Rotation of array

  Rotacja tablicy polega na przesuwaniu elementów o jakąś daną ilość przesunięcia.

  [1,2,3,4,5] i k = 3, gdzie nasze k to liczba o ile mamy przesunąć każdy element.

  Możemy to zrobić używajac kilku możliwości.

  Zawsze w każdym rozwiązaniu jest coś co się nazywa brute forcem. Czyli najgorszą opcją która od razu nam przychodzi do głowy.

  Starajmy się od razu ją poprawiać czyli napiszemy przykład w oparciu o rozwiązanie w czasie O(n)
*/

const rotate = (arr: number[], k: number) => {
  const tempArr = Array.from({ length: arr.length });

  for (let i = 0; i < arr.length; i++) {
    let rotateIndex = (k + i) % arr.length;

    tempArr[rotateIndex] = arr[i];
  }
};

rotate([1, 2, 3, 4, 5], 1);

/*
  Rozwiązanie działa poprawnie, problemem jest to, że tworzymy zmienną tempArr, co oznacza, że nasz space complexity wynosi teraz ile? Dokładnie O(n).
  Czasami w zadaniach wymagana jest complexity na poziomie O(1) czyli constant.

  WAŻNE! Powyższy przykład nie obsługuje problemu z pustymi tablicami, z ujemnym k, tylko obrazuje!

  Teraz pokażę najlepsze rozwiązanie czyli time complexity O(n) i space complexity O(1)
*/

/*
  Zasada działania ->

  Najpierw pobieramy miejsce od którego zaczelibyśmy zmieniać elementy, czyli

  index = 3%8

  Potem musimy odwrócić całą tablicę

  [7,6,5,4,3,2,1]

  Potem obracamy tablicę do index elementów

  [5,6,7,4,3,2,1]

  Potem obracamy tablicę od k elementów

  [5,6,7,1,2,3,4]

  I to jest nasza finalna odpowiedź.

  [1,2,3,4,5,6,7],k=3;
*/

const reverseArray = (arr: number[], start: number, end: number) => {
  while (start <= end) {
    let temp = arr[start];

    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

const rotateBetter = (arr: number[], k: number) => {
  // Najpierw pobieramy miejsce gdzie mamy zacząć zmieniać nasze elementy.
  let rotateIndex = k % arr.length;

  // Obracamy całą tablicę
  reverseArray(arr, 0, arr.length - 1);

  // Obracamy tablicę do rotateIndex elementu.

  reverseArray(arr, 0, rotateIndex - 1);

  // Obracamy tablicę od rotateIndex elementu.

  reverseArray(arr, rotateIndex, arr.length - 1);

  return arr;
};

rotateBetter([1, 2, 3, 4, 5, 6, 7], 3);

/*
  3. Multidimensional array

  Tablice o większym deep niż 1. Czyli tablica w tablicy.

  Przykład -> [[12,3],[4]]
*/

const multidimensional: number[][] = [[1, 3], [2]];

/*
  Iterowanie po takiej tablicy odbywa się za pomocą [a][b] czyli [0][0].

  Przykładowa iteracja po całej tablicy.
*/

for (let i = 0; i < multidimensional.length; i++) {
  for (let j = 0; j < multidimensional[i].length; j++) {
    // console.log(multidimensional[i][j]);
  }
}

/*
  Tablice multidemnsional są użyteczne w połączeniu z innymi strukturami i ich algorytmami, np z grafem.
  Zazwyczaj zadania te skupiają się na albo przeszktałcaniu macierzy albo na wyszukiwaniu w nim danych.
*/

/*
  4. Kadane's algorithm.

  Jest to algorytm jeden z ważniejszych przy używaniu tablic, pozwala na znalezienie subarray sum albo innych takich rzeczy.
*/

const maxSubarraySum = (arr: number[], cons: number) => {
  let MAX = 0;
  let windowSum = 0;
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    if (i + 1 - start === cons) {
      MAX = Math.max(MAX, windowSum);
      windowSum -= arr[start];
      start += 1;
    }
  }

  return MAX;
};

maxSubarraySum([1, 2, 3, 4, 5], 2);

/*
  Minimum size subarray sum - zadanie z leetcode, dobry przykład na wykorzystanie sliding window pattern.
*/

const minimumSizeSubarraySum = (arr: number[], target: number) => {
  let minimumSize = 0;
  let start = 0;
  let windowSum = 0;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    while (windowSum >= target) {
      minimumSize = Math.min(i - start + 1);
      windowSum -= arr[start];
      start++;
    }
  }
};

minimumSizeSubarraySum([2, 3, 1, 2, 4, 3], 7);

/*
  5. Binary search

  Pozwala na wyszukiwanie elementu w posortowanej tablicy w sposób O(log(n)).

  Jest to dużo szybszy algorytm wyszukiwania elementu niż linear search, ale działa tylko na posortowanych liczbach.
  Zawsze ilość kroków będzie się kończyła na 8 dlaczego?

  Za każdym razem wybieramy środek w naszej tablicy i dzielimy na pół aż nie znajdziemy elementu, ot to cała historia! :D

  */

const binarySearch = (arr: number[], searchNum: number) => {
  let start = 0;
  let end = arr.length - 1;
  let kroki = 0;

  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    kroki++;

    if (mid === searchNum) {
      return mid;
    }
    if (arr[mid] > searchNum) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

binarySearch([1, 2, 3, 4, 5, 6, 7], 2);

/*

  Z zadań o windows pattern zrobimy jeszcze najdłuższy podciąg

  "abcbccabcdce" => 3/abc

  Zasada działania opiera się o dictionary - słownik - obiekt.

  Ustawiamy zmienną left i right na 0 które będą naszymi pointerami w stringu.

  Pobieramy znak i sprawdzamy czy jest on w naszym obiekcie, jeżeli jest to przestawiamy zmienną left

  Jeżeli nie to przestawiamy naszą zmienną right o 1 pole do przodu

*/

const findLongestSubstring = (s: string) => {
  const dict: Record<string, number> = {};
  let left = 0;
  let right = 0;
  let counter = 0;

  while (left < s.length && right < s.length) {
    const char = s[right];

    if (dict[char]) {
      left = Math.max(left, dict[char] + 1);
    }

    dict[char] = right;
    counter = Math.max(counter, right - left + 1);
    right++;
  }
  return counter;
};

findLongestSubstring("abcdggabd");
