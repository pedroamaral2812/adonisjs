'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
  user() {
    //Projeto pertence a um usuario
    return this.belongsTo('App/Model/User')
  }

  tasks() {
    //Projeto possui varias tasks
    return this.hasMany('App/Model/Task')
  }


}

module.exports = Project
