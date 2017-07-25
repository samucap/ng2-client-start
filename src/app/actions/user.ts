function login (payload) {
  return {
    type: 'USER_LOGIN',
    payload
  }
}

export { login }
