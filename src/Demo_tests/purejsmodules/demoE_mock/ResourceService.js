export default class ResourceService {
  static getUsers() {
    return fetch({
      method: 'GET',
      url: 'api/v1/users',
    }).then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error('Api server error!');
    });
  }

  static updateUser(user) {
    if (!('id' in user)) {
      throw new Error('user requires an id!');
    }
    return fetch({
      method: 'PUT',
      url: `api/v1/users/${user.id}`,
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error('Api server error!');
    });
  }
}
