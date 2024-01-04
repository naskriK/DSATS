export function toCsvText(array: number[][]): string {
  const mappedToStringArray = array
    .map((subArray, id) => {
      let mapped = subArray.join(",");
      if (id === array.length) {
        mapped += "\n";
      }
      return mapped;
    })
    .join("");
  return mappedToStringArray; // good luck
}
