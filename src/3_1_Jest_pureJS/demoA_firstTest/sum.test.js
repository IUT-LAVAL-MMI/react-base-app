import sum from './sum';

test('adds 0 + 2 to equal 2', () => {
  expect(sum(0, 2)).toBe(2);
});

test('adds 1 + 3 to equal 4', () => {
  expect(sum(1, 3)).toBe(4);
});

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});
