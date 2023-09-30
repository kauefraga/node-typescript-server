import { describe, it, expect } from 'vitest';
import { User } from '@core/entities/User';

describe('User entity', () => {
  it('should be able to create a user', () => {
    const user = new User({
      name: 'Test Username',
      nickname: 'Test Nickname',
    });

    expect(user).toBeInstanceOf(User);
  });

  it('should return user properties properly', () => {
    const user = new User({
      name: 'Test Username',
      nickname: 'Test Nickname',
    });

    expect(user.name).toEqual('Test Username');
    expect(user.nickname).toEqual('Test Nickname');
    expect(user.createdAt).toBeInstanceOf(Date);
  });

  it('should be able to update a user', () => {
    const user = new User({
      name: 'Test Username',
      nickname: 'Test Nickname',
    });

    user.name = 'New Test Username';
    user.nickname = 'New Test Nickname';

    expect(user.name).toEqual('New Test Username');
    expect(user.nickname).toEqual('New Test Nickname');
  });
});
