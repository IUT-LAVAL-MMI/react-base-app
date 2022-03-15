import { fctAPromesse, fctACallback, fctAPromesseEchec } from './fctAsync';

test('les données transmises au callback de fctACallback seront YOUPI', () => {
  const p = new Promise((resolve) => {
    fctACallback((d) => {
      expect(d).toBe('YOUPI');
      resolve();
    });
  });

  return p;
}, 300);

test('les données de la promesse de fctAPromesse seront YOUPI', () => fctAPromesse().then((data) => {
  expect(data).toBe('YOUPI');
}));

test('les données de la promesse seront YOUPI (en utilisant resolves)', () => expect(fctAPromesse()).resolves.toBe('YOUPI'));

test('les données de la promesse seront YOUPI (en utilisant async)', async () => {
  expect(await fctAPromesse()).toBe('YOUPI');
});

test("les promesse échouera et l'erreur contiendra 'toto' (en utilisant rejects)", () => expect(fctAPromesseEchec()).rejects.toThrow(/toto/i));

test("les promesse échouera et l'erreur contiendra 'toto' (en utilisant async)", async () => {
  // Methode déconseillée : c'est immonde !
  try {
    await fctAPromesseEchec();
    expect.toBeTruthy(false);
  } catch (e) {
    expect(e.message).toMatch(/toto/i); //eslint-disable-line
  }
});
