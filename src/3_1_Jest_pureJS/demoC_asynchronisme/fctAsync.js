export function fctACallback(callback) {
  setTimeout(() => {
    if (callback) {
      callback('YOUPI');
    }
  }, 200);
}

export function fctAPromesse() {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve('YOUPI');
    }, 200);
  });
  return p;
}

export function fctAPromesseEchec() {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("c'est râté mon Toto"));
    }, 200);
  });
  return p;
}
