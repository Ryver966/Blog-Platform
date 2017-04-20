const initialUser = { 
  email: 'none@none.com',
  avatar: null,
  id: 123,
  firstName: 'Peter',
  lastName: 'Parker',
  dateOfBirth: 'none',
  phone: 'none',
  discord: 'none',
  tweeter: 'none',
  facebook: 'none',
  linkedIn: 'none',
  gitHub: 'none'
}

export default function(state=initialUser, action) {
  switch(action.type) {
    case 'SIGN_IN':
    return action.payload
    break;
  }
  return state;
}