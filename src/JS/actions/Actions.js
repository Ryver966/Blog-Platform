import { sign_in } from './sign_in';
import { store } from '../reducers/Store'

const promiseMockSignInFn = new Promise((reslove, reject) => {
  const authSuccess = true;

    if(authSuccess) {
      reslove({ Email: 'asd@zxc' })
    } else {
      reject('failed')
    }
});

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
      alert('Passwords must be idendical.')
    }
  } else {
    alert('Check all fields.')
  }
}