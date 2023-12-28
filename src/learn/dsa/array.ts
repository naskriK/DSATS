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
