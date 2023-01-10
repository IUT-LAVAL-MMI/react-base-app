import React, { useState } from 'react';
import SousMenu from './SousMenu';
import SousMenuB from './SousMenuB';

function Menu() {
  const [cpt, setCpt] = useState(0);

  return (
    <div>
      <h3>Le Menu</h3>
      <SousMenu />
      <br />
      <SousMenuB />
      <br />
      <button type="button" onClick={() => { setCpt(cpt + 1); }}>
        Un boutton pour provoquer le re-rendu
      </button>
    </div>
  );
}

export default Menu;
