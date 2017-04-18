const initialUser = { 
  email: null,
  avatar: null
}

export default function(state=initialUser, action) {
  switch(action.type) {
    case 'SIGN_IN':
    return action.payload
    break;
  }
  return state;
}