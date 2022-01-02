import { makeAutoObservable } from 'mobx';

class Personne {
  _prenom;

  _nom;

  constructor(prenom, nom) {
    makeAutoObservable(this);
    this._prenom = prenom;
    this._nom = nom;
  }

  get prenom() {
    return this._prenom;
  }

  set prenom(prenom) {
    this._prenom = prenom;
  }

  get nom() {
    return this._nom;
  }

  set nom(nom) {
    this._nom = nom;
  }
}

export default Personne;
