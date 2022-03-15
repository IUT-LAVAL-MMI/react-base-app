const DONNEES_TEST = {
};

function fetchColor() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('rouge'), 300);
  });
}

beforeAll(() => fetchColor().then((c) => {
  DONNEES_TEST.couleur = c;
  return c;
}));

afterAll(() => {
  delete DONNEES_TEST.couleur;
});

test('La couleur vaut finalement rouge', () => {
  expect(DONNEES_TEST.couleur).toBe('rouge');
});

test('La couleur vaut finalement rouge2', () => {
  expect(DONNEES_TEST.couleur).toBe('rouge');
});

test('La couleur vaut finalement rouge3', () => {
  expect(DONNEES_TEST.couleur).toBe('rouge');
});
