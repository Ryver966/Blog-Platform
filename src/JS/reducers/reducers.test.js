import LoggedIn from './reducer-logged-user';

describe('logged user reducer', () => {
  it('should return the initial state', () => {
    expect(LoggedIn(undefined, {})).toEqual({ Email: null })
  })
  it('should handle sign_in', () => {

    expect(LoggedIn({}, { 
      type: 'SIGN_IN',
      payload: { Email: 'asd@zxc' }
    })).toEqual({ Email: 'asd@zxc' })

    expect(LoggedIn({}, {
      type:'SIGN_IN',
      payload: { Email: 'zxc@asd' }
    })).toEqual({ Email: 'zxc@asd' })
  })
})