import ResourceService from './ResourceService';
import UserManager from './UserManager';

jest.mock('./ResourceService');

let TEST_USERS = [];

beforeAll(() => {
  TEST_USERS = [{ id: 1, username: 'Oana', version: 1 }, { id: 2, username: 'Irina', version: 1 }];
});

test("L'api devrait récupérer 2 utilisateurs", () => {
  ResourceService.getUsers.mockResolvedValue(TEST_USERS);

  return UserManager.init().then(() => {
    expect(UserManager.users).toHaveLength(2);
    TEST_USERS.forEach((user) => {
      expect(UserManager.users).toContainEqual(user);
    });
  });
});

test("L'api devrait mettre à jour l'utilisateur", async () => {
  ResourceService.getUsers.mockResolvedValue(TEST_USERS);
  ResourceService.updateUser.mockImplementation(async (user) => {
    const savedUser = TEST_USERS.filter((u) => u.id === user.id)[0];
    savedUser.username = user.username;
    savedUser.version += 1;
    return savedUser;
  });

  await UserManager.init();
  const userToUpdate = UserManager.getUserById(1);
  expect(userToUpdate).toHaveProperty('username', 'Oana');
  userToUpdate.username = 'Paul';
  const userUpdated = await UserManager.updateUser(userToUpdate);
  expect(userUpdated).toHaveProperty('version', 2);
});
