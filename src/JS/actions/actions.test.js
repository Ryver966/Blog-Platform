import { sign_in } from './sign_in';

describe('actions', () => {
  it('should creation action to sign in user' ,() => {
    const user = { email: 'test' };
    const expectedAction = {
      type: 'SIGN_IN',
      payload: user
    }
    expect(sign_in(user)).toEqual(expectedAction)
  })
})