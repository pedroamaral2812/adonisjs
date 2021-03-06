'use strict'

const Antl = use('Antl')

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

  get messages () {
      return Antl.list('validation')
  }
}

module.exports = User
