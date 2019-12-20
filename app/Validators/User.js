'use strict'

class User{
  //Faz com valide todos os campos
  get validateAll () {
    return true
  }

  get rules () {
    return {
      // validation rules
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed'
    }
  }
}

module.exports = User
