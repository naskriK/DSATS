// TITLE - TIME AND SPACE COMPLEXITY - BIG(O)

/*
  1. Czym jest algorytm?

  Jest to skończona ilość kroków, do uzyskania jakiegoś pożądanego efektu.

  Algorytm możemy zapisywać za pomocą różnych sposób, np listy kroków.
  1. Podaj a,b.
  2. A jest większe od b? Idź dalej, wróć.
  3. Wypisz a.

  Najczęśniej widzimy schematy blokowe, albo liste kroków.

  Jest to najbardziej efektywny sposób bez względu na to w jakim języku programujemy. Są to uniwersalne rozwiązania.

  2. Czym jest BigO

  Big O jest to ogólna notacja do oznaczenia jak nasz algorytm radzi sobie czasowo z ilością elementów którą mu damy.

  Przyjął się taki ogólny standard nazywania złożoności czasowej, zamiast pisać n+5n+3n to ogólnie piszę się O(n).

  Jest kilka ogólnych wartości które są zazwyczaj używane..

  O(1) czas liniowy, nie ważne ile elementów damy będzie taki sam czas.
  O(n) czas rośnie wraz z ilościa danych mu elementów.
  O(logn) czas logarytmiczny, np binary search, szybszy niż O(n) ale wolniejszy niż O(1)
  O(n^2) czas kwadratowy, najczęściej przy używaniu pętli w pętli, najgorszy ze wszystkich, bardzo szybko rośnie ilość czasu wraz z elementami.

  Najczęściej będziemy próbować nasze algorytmy napisać i stworzyć aby były jak najbardziej wydajne.

  3. Space complexity

  Jest to złożoność pamięci naszego algorytmu, ile zajmie i ile potrzebuje miejsca.
  Jest to drugi stopień efektywności naszego algorytmu, oprócz niego jest wspomniany wcześniej notacja Big O.

  Złożoność pamięci kładzie się na to, ile wykorzystujemy pamięci, albo nasze zmienne aby algorytm działał.

  Zmienne typu prymitywnego zawsze mają constant space, ale np tablica już ma space O(n) zależny od ilości elementów w tablicy.

  Czasami jest to mylne z time complexity, ale time complexity opisuje ile nasz kod będzie trwał,
  space complexity ile potrzebujemy zmiennych, pamięci aby nasz algorytm działał.

*/

/* EXAMPLE */

const addNumbers = (firstNum: number, secondNum: number) => {
  return firstNum + secondNum;
};

/*
  Time complexity - O(1)
  Space complexity - O(1)
*/

const loopArray = <T>(arr: T[]) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

/*
  Time complexity - O(n)
  Space complexity - O(1)
*/
