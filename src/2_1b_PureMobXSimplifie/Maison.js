import {
  makeAutoObservable,
} from 'mobx';

class Maison {
  static HAUTEUR_ETAGE = 2.8;

  _name; // Nom de la maison

  _surfaceTotal; // Surface totale de la maison

  _nbEtages = 1; // Nombre d'étages

  _portes = ['entrée', 'arriere']; // portes de la maison

  constructor(name, surfaceRdc = 90) {
    // Definition de ce qui est observable, dérivé ou une action
    makeAutoObservable(this, {
      _name: false,
      name: false,
    });
    this._name = name;
    this._surfaceTotal = surfaceRdc;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get surfaceTotal() {
    return this._surfaceTotal;
  }

  set surfaceTotal(surfaceTotal) {
    this._surfaceTotal = surfaceTotal;
  }

  get nbEtages() {
    return this._nbEtages;
  }

  get portes() {
    return this._portes;
  }

  // Hauteur totale de la maison
  get hauteur() {
    return this._nbEtages * Maison.HAUTEUR_ETAGE;
  }

  // Volume de la maison
  get volume() {
    return this._surfaceTotal * Maison.HAUTEUR_ETAGE;
  }

  // Nombre de portes
  get nbEntrees() {
    return this._portes.length;
  }

  // Ajoute un étage d'une surface donnée
  ajouterEtage(surfaceEtage) {
    this._surfaceTotal += surfaceEtage;
    this._nbEtages += 1;
  }
}

export default Maison;
