import ResourceService from './ResourceService';

class UserManager {
  _users;

  constructor() {
    this._users = {};
  }

  init() {
    return ResourceService.getUsers().then((users) => {
      users.forEach((user) => {
        this._users[user.id] = user;
      });
      return true;
    });
  }

  getUserById(id) {
    return this._users[id];
  }

  get users() {
    return Object.values(this._users);
  }

  updateUser(user) {
    return ResourceService.updateUser(user).then((userUpdated) => {
      this._users[userUpdated.id] = userUpdated;
      return userUpdated;
    });
  }
}

const INSTANCE = new UserManager();

export default INSTANCE;
