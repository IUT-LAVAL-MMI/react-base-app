const DONNEES_TEST = {
};

beforeAll(() => {
  DONNEES_TEST.couleur = 'rouge';
});

afterAll(() => {
  DONNEES_TEST.couleur = 'vert';
});

beforeEach(() => {
  DONNEES_TEST.valeur = 10;
});

afterEach(() => {
  delete DONNEES_TEST.valeur;
});

test('La couleur vaut rouge, La valeur vaut 1 puis 999', () => {
  expect(DONNEES_TEST.couleur).toBe('rouge');
  expect(DONNEES_TEST.valeur).toBe(10);
  DONNEES_TEST.valeur = 999;
});

test('La couleur vaut rouge, La valeur vaut 10 puis 666', () => {
  expect(DONNEES_TEST.couleur).toBe('rouge');
  expect(DONNEES_TEST.valeur).toBe(10);
  DONNEES_TEST.valeur = 666;
});
