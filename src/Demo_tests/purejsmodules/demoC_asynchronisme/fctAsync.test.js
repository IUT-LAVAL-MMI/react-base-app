import { fctAPromesse, fctACallback, fctAPromesseEchec } from './fctAsync';

test('les données transmises au callback seront YOUPI', () => new Promise((done) => {
  function callbackDeTest(data) {
    try {
      expect(data).toEqual('YOUPI');
      done();
    } catch (error) {
      done(error);
    }
  }
  fctACallback(callbackDeTest);
}));

test('les données de la promesse seront YOUPI', () => fctAPromesse().then((data) => {
  expect(data).toEqual('YOUPI');
}));

test('les données de la promesse seront YOUPI (v2)', () => expect(
  fctAPromesse(),
).resolves.toEqual('YOUPI'));

test("les promesse échouera et l'erreur contiendra 'toto'", () => {
  expect.assertions(1); // on s'assure que l'on soit bien rentré dans 1 expectation
  return fctAPromesseEchec().catch(
    (e) => expect(e.message).toMatch(/toto/i),
  );
});

test("les promesse échouera et l'erreur contiendra 'toto' (v2)", () => expect(
  fctAPromesseEchec(),
).rejects.toBeInstanceOf(Error));
