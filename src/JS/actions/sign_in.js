export function sign_in(user) {
  return {
    type: 'SIGN_IN',
    payload: user
  }
}