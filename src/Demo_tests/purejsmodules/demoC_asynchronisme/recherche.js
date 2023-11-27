/* eslint-disable */
async function getHotels() {
  return fetch('').then((response) => response.data);
}

async function getPlaces() {
  return fetch('').then((response) => response.data);
}

async function getDistances() {
  return fetch('').then((response) => response.data);
}


// COMPOSANT
//
class MonCompo {
  async onInoputChange(text) {
    if (text.length > 2) {
      try{
        const hotels = await getHotels();
        const places = await getPlaces();
        const distances = await getDistances();
      }catch (e){

      }
    }
  }
}
