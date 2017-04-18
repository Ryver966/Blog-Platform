import LoggedIn from './reducer-logged-user';

describe('logged user reducer', () => {
  it('should return the initial state', () => {
    expect(LoggedIn(undefined, {})).toEqual({ email: null })
  })
  it('should handle sign_in', () => {

    expect(LoggedIn({}, { 
      type: 'SIGN_IN',
      payload: { email: 'asd@zxc' }
    })).toEqual({ email: 'asd@zxc' })

    expect(LoggedIn({}, {
      type:'SIGN_IN',
      payload: { email: 'zxc@asd' }
    })).toEqual({ email: 'zxc@asd' })
  })
})