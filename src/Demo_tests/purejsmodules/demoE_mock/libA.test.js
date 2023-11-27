import { doSomeStuffs, faitDesInstances, utiliseDesRetours } from './libA';

test('domeSomeStuffs génère 10 valeurs de 0 à 9', () => {
  const fauxCallback = jest.fn((x) => x + 1);
  doSomeStuffs(fauxCallback);
  // Test nombre d'appels
  expect(fauxCallback.mock.calls).toHaveLength(10);
  // Test paramètres passés
  expect(fauxCallback.mock.calls[0][0]).toBe(0);
  expect(fauxCallback.mock.calls[4][0]).toBe(4);
  // Test valeurs retournés
  expect(fauxCallback.mock.results[5].type).toBe('return');
  expect(fauxCallback.mock.results[5].value).toBe(6);
  expect(fauxCallback.mock.results[9].value).toBe(10);
});

test('faitDesInstances fais 3 instances', () => {
  const FausseClasse = jest.fn();
  faitDesInstances(FausseClasse);
  expect(FausseClasse.mock.instances).toHaveLength(3);
  expect(FausseClasse.mock.instances[2].name).toEqual('loulous');
});

test('utiliseDesRetours retourne 10,20,30', () => {
  const fausseFct = jest.fn();
  fausseFct.mockReturnValueOnce('a').mockReturnValueOnce('b').mockReturnValue('c');
  expect(utiliseDesRetours(fausseFct)).toEqual(10);
  expect(utiliseDesRetours(fausseFct)).toEqual(20);
  expect(utiliseDesRetours(fausseFct)).toEqual(30);
});
