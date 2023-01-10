import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import RootStore from '../../RootStore';

import styles from './Turnaround.scss';
import fryPicture from './fry.jpeg';

function computeCustomStyle(angle, borderColor) {
  const customStyle = {};
  if (angle !== undefined && angle !== null) {
    customStyle.transform = `rotate(${angle}deg)`;
  }
  if (borderColor) {
    customStyle.border = `solid 3px ${borderColor}`;
  }
  return customStyle;
}

function Turnaround() {
  const { fryMgr } = useContext(RootStore);
  return (
    <div>
      <div>
        <button type="button" onClick={() => fryMgr.change()}>Change!</button>
      </div>
      <div>
        <img
          src={fryPicture}
          alt="Fry"
          className={styles.Turnaround}
          style={computeCustomStyle(fryMgr.angle, fryMgr.borderColor)}
        />
      </div>
    </div>
  );
}

export default observer(Turnaround);
