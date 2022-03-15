import React, { useState } from 'react';
// import PropTypes from 'prop-types';

function Compteur() {
  const [cptValue, setCpt] = useState(0);

  return (
    <>
      <button
        type="button"
        onClick={() => { setCpt(cptValue + 1); }}
      >
        Incrémenter
      </button>
      <br />
      <span>
        Valeur :&nbsp;
        {cptValue}
      </span>
    </>
  );
}

export default Compteur;
