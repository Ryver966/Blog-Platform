import { sign_in } from './sign_in';
import { store } from '../reducers/Store'

const promiseMockSignInFn = new Promise((reslove, reject) => {
  const authSuccess = true;

    if(authSuccess) {
      reslove({ email: 'asd@zxc' })
    } else {
      reject('failed')
    }
})

export function addPost (blog, title, image, text, tags, author_id) {
  if(blog =='Select Blog' || !title || !text || !tags) {
    alert('Check all fields.')
  } else {
    console.log({ blog: blog, title: title, image: image, text: text, tags: tags, author_id: author_id })
  }
}

export function updateProfile(firstName, lastName, dateOfBirth, phone, discord, tweeter, linkedIn, gitHub) {
  console.log({ firstName: firstName, lastName: lastName, dateOfBirth: dateOfBirth, phone: phone, discord: discord, tweeter: tweeter, linkedIn: linkedIn, gitHub: gitHub })
}

export function signOut() {
  console.log('user logged out');
  console.log(store);
}

export function signIn(email, password) {
  if(email.value.length !== 0 && password.value.length !== 0) {
    return function(dispatch) {
      promiseMockSignInFn.then((fromReslove) => {
        store.dispatch(sign_in(fromReslove));
        event.preventDefault()
      })
      email.value = '';
      password.value = '';
    }
  } else {
    alert('Check all fields.');
  }
}

export function signUp(email, password, confirmPassword, regulationsCheckbox) {
  if(email.length !== 0 && password.length !== 0 && confirmPassword.length !== 0 && regulationsCheckbox.checked) {
    if(password === confirmPassword) {
      window.location.href = '/';
    } else {
      alert('Passwords have to be idendical.')
    }
  } else {
    alert('Check all fields.')
  }
}
export function changePassword(oldPassword, newPassword, confNewPassword) {
  if(newPassword === confNewPassword) {
    console.log('password changed');
    event.preventDefault();
  } else {
    alert('New passwords have to be identical.')
  }
}