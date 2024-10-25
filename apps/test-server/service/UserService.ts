import { Result } from '../utils';

const fakeUserInfo = {
  userId: '1',
  username: 'pocobo1',
  realName: 'Vben Admin',
  desc: 'manager',
  password: 'pocobopass',
  token: 'fakeToken1',
  roles: [
    {
      roleName: 'Super Admin',
      value: 'super',
    },
  ],
};
export default class UserService {
  async login() {
    return Result.success(fakeUserInfo);
  }

  async getUserInfoById() {
    return Result.success(fakeUserInfo);
  }
}
