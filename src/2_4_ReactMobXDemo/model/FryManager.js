import { makeAutoObservable, action } from 'mobx';

const COLORS = ['red', 'blue', 'yellow', 'green', 'grey', 'black', 'orange'];

function fetchFryProps() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Response from server!'); // eslint-disable-line no-console
      resolve({
        angle: Math.random() * 360,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }, 500);
  });
}

class FryManager {
  _angle;

  _borderColor;

  constructor(angle = null, borderColor = null) {
    makeAutoObservable(this);
    this._angle = angle;
    this._borderColor = borderColor;
  }

  get angle() {
    return this._angle;
  }

  get borderColor() {
    return this._borderColor;
  }

  change() {
    fetchFryProps().then(action(({ angle, color }) => {
      console.log(`Updating values with angle=${angle} and borderColor=${color}`); // eslint-disable-line no-console
      this._angle = angle;
      this._borderColor = color;
    }));
  }
}

export default FryManager;
