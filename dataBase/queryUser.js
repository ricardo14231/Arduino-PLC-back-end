const dataBase = require('../config/configDB')

function listAllUser (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .query(`SELECT id_user, name_user, login, profile_user, active_user
             FROM tb_user WHERE deleted_user = 0 `,
      (error, result, fields) => {
        if (error) {
          reject(error)
        }
        resolve(result)
      })
  })
}

function createUser (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .query(`INSERT INTO tb_user (name_user, login, password, active_user, deleted_user, update_user, create_user)
        VALUES ('${req.body.name_user}', '${req.body.login}', '${req.body.password}', ${req.body.active_user}, 0, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()) `,
      (error, result, fields) => {
        if (error) { reject(error) }
        resolve(result)
      })
  })
}

function updateUser (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .query(`UPDATE tb_user 
        SET name_user = '${req.body.name_user}', login = '${req.body.login}', password = '${req.body.password}', active_user = ${req.body.active_user},
        update_user = CURRENT_TIMESTAMP()
        WHERE id_user = ${req.body.id_user}`,
      (error, result, fields) => {
        if (error) { reject(error) }
        resolve(result)
      })
  })
}

function deleteUser (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .query(`UPDATE tb_user SET deleted_user = 1 WHERE id_user = ${req.params.id_user} `,
        (error, result, fields) => {
          if (error) { reject(error) }
          resolve(result)
        })
  })
}

module.exports = { listAllUser, createUser, updateUser, deleteUser }
