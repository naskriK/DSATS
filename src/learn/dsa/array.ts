// DSA - Array Structure

/*
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
