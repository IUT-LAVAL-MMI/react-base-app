import {
  makeObservable, observable, computed, action,
} from 'mobx';

class Maison {
  static HAUTEUR_ETAGE = 2.8;

  name; // Nom de la maison

  surfaceTotal; // Surface totale de la maison

  nbEtages = 1; // Nombre d'étages

  portes = ['entrée', 'arriere']; // portes de la maison

  constructor(name, surfaceRdc = 90) {
    // Definition de ce qui est observable, dérivé ou une action
    makeObservable(this, {
      surfaceTotal: observable,
      nbEtages: observable,
      portes: observable,
      hauteur: computed,
      volume: computed,
      nbEntrees: computed,
      ajouterEtage: action,
    });
    this.name = name;
    this.surfaceTotal = surfaceRdc;
  }

  // Hauteur totale de la maison
  get hauteur() {
    return this.nbEtages * Maison.HAUTEUR_ETAGE;
  }

  // Volume de la maison
  get volume() {
    return this.surfaceTotal * Maison.HAUTEUR_ETAGE;
  }

  // Nombre de portes
  get nbEntrees() {
    return this.portes.length;
  }

  // Ajoute un étage d'une surface donnée
  ajouterEtage(surfaceEtage) {
    this.surfaceTotal += surfaceEtage;
    this.nbEtages += 1;
  }
}

export default Maison;
