export function doSomeStuffs(callback) {
  Array(10).fill(null).forEach((item, i) => {
    callback(i);
  });
}

export function faitDesInstances(Classe) {
  // eslint-disable-next-line no-unused-vars
  const instances = 'Coucou les loulous'.split(' ').map((value) => {
    const i = new Classe();
    i.name = value;
    return i;
  });
  return true;
}

export function utiliseDesRetours(fct) {
  switch (fct()) {
    case 'a':
      return 10;
    case 'b':
      return 20;
    case 'c':
      return 30;
    default:
      return -1;
  }
}
