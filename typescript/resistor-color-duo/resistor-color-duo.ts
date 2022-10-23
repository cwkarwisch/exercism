const bandColorEncoding = new Map<string, number> ([
  ['black', 0],
  ['brown', 1],
  ['red', 2],
  ['orange', 3],
  ['yellow', 4],
  ['green', 5],
  ['blue', 6],
  ['violet', 7],
  ['grey', 8],
  ['white', 9]
]);

export function decodedValue(colors: string[]): number {
  const firstColor = colors[0];
  const secondColor = colors[1];
  if (!bandColorEncoding.has(firstColor) || !bandColorEncoding.has(secondColor)) {
    throw new Error('Provided color does not have a valid encoding')
  }
  const bandValue1 = bandColorEncoding.get(firstColor);
  const bandValue2 = bandColorEncoding.get(secondColor);
  return (bandValue1! * 10) + bandValue2!;
}
