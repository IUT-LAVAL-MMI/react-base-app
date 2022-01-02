/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';

function initInfoRectangleState({ longueurInit, largeurInit }) {
  return {
    longueur: longueurInit,
    largeur: largeurInit,
    surface: longueurInit * largeurInit,
    color: '#000000',
  };
}

function reduceInfoRectangle(state, action) {
  switch (action?.type) {
    case 'set-color':
      return { ...state, color: action.value };
    case 'set-longueur': {
      const longueur = Number(action.value);
      return { ...state, longueur, surface: state.largeur * longueur };
    }
    case 'set-largeur': {
      const largeur = Number(action.value);
      return { ...state, largeur, surface: state.longueur * largeur };
    }
    case 'double-surface': {
      const racine2 = Math.sqrt(2);
      const longueur = state.longueur * racine2;
      const largeur = state.largeur * racine2;
      return {
        ...state, longueur, largeur, surface: longueur * largeur,
      };
    }
    case 'divide-surface': {
      const racine2 = Math.sqrt(2);
      const longueur = state.longueur / racine2;
      const largeur = state.largeur / racine2;
      return {
        ...state, longueur, largeur, surface: longueur * largeur,
      };
    }
    default:
      throw new Error(`Unknown action type "${action?.type}"`);
  }
}

function ControlInputParState({ longueurInit, largeurInit }) {
  const [state, dispatch] = useReducer(
    reduceInfoRectangle,
    { longueurInit, largeurInit },
    initInfoRectangleState,
  );

  return (
    <>
      <label htmlFor="inputColor">Couleur</label>
      <input
        id="inputColor"
        type="color"
        value={state.color}
        onChange={(event) => { dispatch({ type: 'set-color', value: event.target.value }); }}
      />
      <label htmlFor="inputLongueur">Longueur</label>
      <input
        id="inputLongueur"
        type="number"
        step="0.01"
        placeholder="1.0"
        value={state.longueur}
        onChange={(event) => { dispatch({ type: 'set-longueur', value: event.target.value }); }}
      />
      <label htmlFor="inputLargeurr">Longueur</label>
      <input
        id="inputLargeurr"
        type="number"
        step="0.01"
        placeholder="1.0"
        value={state.largeur}
        onChange={(event) => { dispatch({ type: 'set-largeur', value: event.target.value }); }}
      />
      <button
        type="button"
        onClick={() => { dispatch({ type: 'double-surface' }); }}
      >
        Doubler la surface
      </button>
      <button
        type="button"
        onClick={() => { dispatch({ type: 'divide-surface' }); }}
      >
        Diviser la surface par deux
      </button>
      <div>
        <span>
          Longueur:
          {state.longueur}
        </span>
        <span>
          largeur:
          {state.largeur}
        </span>
        <span>
          Surface:
          {state.surface}
        </span>
      </div>
    </>
  );
}

export default ControlInputParState;
