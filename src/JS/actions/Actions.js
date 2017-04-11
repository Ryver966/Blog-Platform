function mockSignInFn(email, password) {
  setTimeout(() => { console.log(`${ email } user is logged in`) }, 500)
};

function mockSignUpFn(email, password) {
  setTimeout(() => { console.log('User created') }, 500);
}

export function signIn(email, password) {
  if(email.length !== 0 && password.length !== 0) {
    mockSignInFn(email, password);
  } else {
    alert('Check all fields.');
  }
}

export function signUp(email, password, confirmPassword, regulationsCheckbox) {
  if(email.length !== 0 && password.length !== 0 && confirmPassword.length !== 0 && regulationsCheckbox.checked) {
    if(password === confirmPassword) {
      mockSignUpFn(email, password);
      window.location.href = '/';
    } else {
      alert('Passwords must be idendical.')
    }
  } else {
    alert('Check all fields.')
  }
}