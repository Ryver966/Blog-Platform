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
  gitHub: 'none',
  blogs:[
    {
      id: 1,
      title: 'Java Script Learning',
      posts: {

      }
    },
    {
      id: 2,
      title: 'Redux Tutorials',
      posts: {

      }
    }
  ]
}

export default function(state=initialUser, action) {
  switch(action.type) {
    case 'SIGN_IN':
    return action.payload
    break;
  }
  return state;
}