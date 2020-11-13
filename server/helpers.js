const map = [
  ['-', '-', '-', 'O', '-', '-', '-', '-', '-', 'O'],
  ['-', 'O', '-', '-', '-', 'O', '-', 'D', '-', '-'],
  ['-', '-', '-', '-', 'O', '-', '-', 'O', '-', '-'],
  ['-', 'O', '-', 'O', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', 'O', '-', 'O', '-', '-'],
  ['F', '-', '-', 'O', '-', '-', '-', '-', '-', 'O'],
  ['-', '-', 'O', '-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-', 'O', '-', '-'],
  ['-', 'O', '-', '-', 'O', 'O', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-', '-', 'O', '-'],
];

function makeMoves(moves) {
  let coordsY = 5;
  let coordsX = 0;

  const results = {
    '-': 'Nothing was found. 🤷‍♀️',
    O: 'Orc found, Frodo is dead. 💀',
    D: 'Ring is destroyed. 👐',
    F: 'Back where you started! 😂',
  };

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'n') coordsY--;
    if (moves[i] === 's') coordsY++;
    if (moves[i] === 'e') coordsX++;
    if (moves[i] === 'w') coordsX--;
    if (coordsX < 0 || coordsX > 9 || coordsY < 0 || coordsY > 9) {
      return 'Falls out of the map. 😱';
    }
  }

  const discovered = map[coordsY][coordsX];
  return results[discovered];
}

module.exports = { makeMoves };
