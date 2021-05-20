const dataBase = require('../config/configDB')

function listAllRoom (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .query('SELECT id_room, name_room, name_pavilion ' +
        'FROM tb_room join tb_pavilion ' +
        'ON tb_room.fk_id_pavilion = tb_pavilion.id_pavilion ' +
        'WHERE tb_room.deleted_room = 0 '
      , (error, result, fields) => {
        if (error) { reject(error) }
        resolve(result)
      })
  })
}

function listActiveRoom (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .query(
        'SELECT id_room, name_room ' +
            'FROM tb_room ' +
            'WHERE active_room = 1 AND deleted_room = 0',
        (error, result, fields) => {
          if (error) { reject(error) }
          resolve(result)
        })
  })
}

function readRoomById (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection.query('', (error, result, fields) => {
      if (error) { reject(error) }
      resolve(result)
    })
  })
}

function readRoomByIdPavilion (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .query('SELECT id_room, name_room, fk_id_air, turn_on_air, current_temperature_air, state_cool_air, state_fan_air, temperature_min_air, temperature_max_air, url_device_air ' +
        'FROM tb_room join tb_air ' +
        'ON tb_room.fk_id_air = tb_air.id_air ' +
        'WHERE tb_room.fk_id_pavilion = ' + req.params.id_pavilion + ' AND tb_room.active_room = 1 AND tb_room.deleted_room = 0',
      (error, result, fields) => {
        if (error) { reject(error) }
        resolve(result)
      })
  })
}

function readCrudRoomByIdPavilion (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .query('SELECT id_room, name_room, fk_id_pavilion, fk_id_air, name_pavilion, name_air, active_room ' +
        'FROM tb_room AS room join tb_pavilion AS pavi join tb_air AS air ' +
        'ON room.fk_id_air = air.id_air AND room.fk_id_pavilion = pavi.id_pavilion ' +
        'WHERE room.fk_id_pavilion = ' + req.params.id_pavilion + ' AND room.fk_id_air = air.id_air AND room.deleted_room = 0 '
      , (error, result, fields) => {
        if (error) { reject(error) }
        resolve(result)
      })
  })
}

function createRoom (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .beginTransaction((error) => {
        if (error) { reject(error) }

        dataBase.connection
          .query('INSERT INTO tb_room (fk_id_pavilion, fk_id_air, name_room, active_room, deleted_room, update_room, create_room) ' +
            'VALUES (' + req.body.fk_id_pavilion + ', ' + req.body.fk_id_new_air + ', "' + req.body.name_room + '", ' + req.body.active_room + ' ' +
                    ', false ,CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()); ',
          (error, result, fields) => {
            if (error) {
              dataBase.connection.rollback(() => {
                reject(error)
              })
            }

            dataBase.connection
              .query('UPDATE tb_air SET allocated_air = true WHERE id_air = ' + req.body.fk_id_new_air + '',
                (error, result, fields) => {
                  if (error) {
                    dataBase.connection.rollback(() => {
                      reject(error)
                    })
                  }

                  dataBase.connection.commit((error, result, fields) => {
                    if (error) {
                      dataBase.connection.rollback(() => {
                        reject(error)
                      })
                    }

                    resolve(result)
                  })
                })
          })
      })
  })
}

function updateRoom (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .beginTransaction((error) => {
        if (error) { reject(error) }

        dataBase.connection
          .query(
            'UPDATE tb_room ' +
                'SET tb_room.fk_id_pavilion = ' + req.body.fk_id_pavilion + ', tb_room.fk_id_air = ' + req.body.fk_id_new_air + ' ,' +
                'tb_room.name_room = "' + req.body.name_room + '", ' +
                'tb_room.active_room = ' + req.body.active_room + ' , ' +
                'tb_room.update_room = CURRENT_TIMESTAMP() ' +
                'WHERE tb_room.id_room = ' + req.body.id_room + ';',
            (error, result, fields) => {
              if (error) {
                dataBase.connection.rollback(() => {
                  reject(error)
                  console.log(error)
                })
              }

              // Verifica se houve alteração do ar-condicionado no update da sala de aula.
              if (req.body.fk_id_air != null && req.body.fk_id_new_air != null) {
                dataBase.connection
                  .query('UPDATE tb_air SET allocated_air = true WHERE id_air = ' + req.body.fk_id_new_air + '',
                    (error, result, fields) => {
                      if (error) {
                        dataBase.connection.rollback(() => {
                          reject(error)
                        })
                      }

                      dataBase.connection
                        .query('UPDATE tb_air SET allocated_air = false WHERE id_air = ' + req.body.fk_id_air + '',
                          (error, result, fields) => {
                            if (error) {
                              dataBase.connection.rollback(() => {
                                reject(error)
                              })
                            }
                          })
                    })
              }

              dataBase.connection.commit((error, result, fields) => {
                if (error) {
                  dataBase.connection.rollback(() => {
                    reject(error)
                  })
                }

                resolve(result)
              })
            })
      })
  })
}

function deleteRoom (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .query('UPDATE tb_room SET deleted_room = 1 WHERE id_room = ' + req.params.id_room + '',
        (error, result, fields) => {
          if (error) { reject(error) }
          resolve(result)
        })
  })
}

module.exports = { listAllRoom, listActiveRoom, readRoomById, readRoomByIdPavilion, readCrudRoomByIdPavilion, createRoom, updateRoom, deleteRoom }
