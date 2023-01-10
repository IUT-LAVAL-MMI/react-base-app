/* eslint-disable no-console */
/*
 Cette partie est juste pour la démo, les reaction avec React seront traitées avec mobx-react.
 */
import { autorun, action } from 'mobx';
import Maison from './Maison';

const MA_MAISON = new Maison('laBaraque', 88);

autorun(() => {
  console.log(`La surface a changé : ${MA_MAISON.surfaceTotal}`);
});

autorun(() => {
  console.log(`La hauteur a changé : ${MA_MAISON.hauteur}`);
});

autorun(() => {
  console.log(`Le volume a changé : ${MA_MAISON.volume}`);
});

autorun(() => {
  console.log(`Le nombre de portes a changé : ${MA_MAISON.nbEntrees}`);
});

autorun(() => {
  console.log(`Le nom a changé (ne devrait pas s'afficher) : ${MA_MAISON.name}`);
});

setTimeout(() => {
  action(() => {
    console.log('Modification de la surface...');
    MA_MAISON.surfaceTotal += 30;
  })();
}, 2000);

setTimeout(() => {
  action(() => {
    console.log("Ajout d'une porte...");
    MA_MAISON.portes.push('garage');
  })();
}, 4000);

setTimeout(() => {
  console.log("Ajout d'un étage");
  MA_MAISON.ajouterEtage(30);
}, 6000);

setTimeout(() => {
  action(() => {
    console.log('Modification du nom...');
    MA_MAISON.name = 'Mon chateau';
  })();
}, 8000);
