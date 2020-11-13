const helpers = require('./helpers');


test('Check inputs return correct results', () => {
  expect(helpers.makeMoves('neeen')).toBe('Orc found, Frodo is dead. 💀');
  expect(helpers.makeMoves('neewennne')).toBe('Nothing was found. 🤷‍♀️');
  expect(helpers.makeMoves('ssssenwwneenne')).toBe('Falls out of the map. 😱');
  expect(helpers.makeMoves('nnnneeeeeee')).toBe('Ring is destroyed. 👐');
});



