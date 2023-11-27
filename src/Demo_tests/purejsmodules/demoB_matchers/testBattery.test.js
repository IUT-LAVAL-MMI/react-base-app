// Regardez https://jestjs.io/docs/en/expect

test('Attentes générales', () => {
  let a;
  expect(a).toBeUndefined();
  a = null;
  expect(a).toBeDefined();
  expect(a).toBeNull();
  a = true;
  expect(a).toBeTruthy();
  a = 1;
  expect(a).toBeTruthy();
  a = false;
  expect(a).toBeFalsy();
  a = '';
  expect(a).toBeFalsy();
});

test('Attentes sur les nombres', () => {
  let result = 3 + 3;
  expect(result).toBeGreaterThan(3);
  expect(result).toBeGreaterThanOrEqual(3.5);
  expect(result).toBeLessThan(7);
  expect(result).toBeLessThanOrEqual(6);
  expect(result).toBe(6);
  expect(result).toEqual(6); // toBe et toEqual pareil pour des nombres

  result = 1 / 3;
  expect(result).not.toBe(0.33333333);
  expect(result).toBeCloseTo(0.3330, 3);
});

test('Attentes sur les chaînes', () => {
  expect('Rémi Venant').toEqual('Rémi Venant');
  expect('Rémi Venant').toMatch(/Rémi/);
  expect('La PETITE    maison').toMatch(/petite\s+maison$/i);
});

test('Attentes sur les tableaux et autres iterables', () => {
  const animaux = ['porco nostrul', 'coq de bresse', 'homard bleu', 'simental'];
  expect(animaux).toContain('homard bleu');
  expect(animaux).not.toContain('waïgu');
  expect(animaux).toHaveLength(4);
});

test('Attentes sur les objets', () => {
  const o1 = { key1: 'val1' };
  const o2 = { key1: 'val1' };
  expect(o1).toBe(o1);
  expect(o1).not.toBe(o2);
  expect(o1).toEqual(o1);
  expect(o1).toEqual(o2);

  const maison = {
    surface: 300,
    etages: 2,
    pieces: {
      salon: 1,
      sdb: 2,
      chambres: 4,
      cuisine: 1,
    },
  };
  expect(maison).toHaveProperty('surface');
  expect(maison).toHaveProperty('etages', 2);
  expect(maison).toHaveProperty('pieces.sdb', 2);

  const e = new Error('un object instance de la classe Error');
  expect(e).toBeInstanceOf(Error);
});

function uneFonctionQuiMerde() {
  throw new Error("Oh non, j'ai merdé !");
}

test('Attentes sur les exceptions', () => {
  expect(uneFonctionQuiMerde).toThrow();
  expect(uneFonctionQuiMerde).toThrow(Error);
  expect(uneFonctionQuiMerde).toThrow("Oh non, j'ai merdé !");
  expect(uneFonctionQuiMerde).toThrow(/merd[eéè]/u);
});

function uneFonctionQuiMerde2(a) {
  if (a === 4) {
    throw new Error("Oh non, j'ai merdé !");
  } else {
    return a - 4;
  }
}

test('Attentes sur les exceptions 2', () => {
  const tstfct = (a) => (() => uneFonctionQuiMerde2(a));
  expect(tstfct(4)).toThrow();
  expect(tstfct(5)()).toEqual(5 - 4);
});
