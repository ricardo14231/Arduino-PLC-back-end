const dataBase = require('../config/configDB')

function listUnallocatedActiveAir (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .query(
        'SELECT id_air, name_air, allocated_air, temperature_min_air, temperature_max_air, url_device_air, active_air ' +
        'FROM tb_air ' +
        'WHERE active_air = 1 AND allocated_air = 0 AND deleted_Air = 0',
        (error, result, fields) => {
          if (error) { reject(error) }
          resolve(result)
        })
  })
}

function listAllocatedAirByIdPavilion (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .query(
        'SELECT id_air, name_air, allocated_air, temperature_min_air, temperature_max_air, url_device_air, active_air ' +
        'FROM tb_air ' +
        'WHERE  tb_air.id_air IN ' +
            '(SELECT fk_id_air ' +
            'FROM tb_room ' +
            'WHERE tb_room.fk_id_pavilion = ' + req.params.id_pavilion + ' AND tb_room.deleted_room = 0)',
        (error, result, fields) => {
          if (error) { reject(error) }
          resolve(result)
        })
  })
}

function listAllAir (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .query(
        'SELECT id_air, name_air, allocated_air, temperature_min_air, temperature_max_air, url_device_air, active_air ' +
        'FROM tb_air ' +
        'WHERE deleted_air = 0',
        (error, result, fields) => {
          if (error) { reject(error) }
          resolve(result)
        })
  })
}

function listNotActiveAir (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .query(
        'SELECT id_air, name_air, allocated_air, temperature_min_air, temperature_max_air, url_device_air, active_air ' +
        'FROM tb_air ' +
        'WHERE active_air = 0 AND deleted_air = 0',
        (error, result, fields) => {
          if (error) { reject(error) }
          resolve(result)
        })
  })
}

function createAir (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .query(
        'INSERT INTO tb_air (name_air, current_temperature_air, state_cool_air, state_fan_air, turn_on_air, allocated_air, ' +
            'temperature_min_air, temperature_max_air, url_device_air , active_air, deleted_air, update_air, create_air) ' +

            'VALUES ("' + req.body.name_air + '", 0, false, false, false, false, ' +
            '' + req.body.temperature_min_air + ', ' + req.body.temperature_max_air + ',"' + req.body.url_device_air + '", ' + req.body.active_air + ', ' +
            'false, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP())',
        (error, result, fields) => {
          if (error) { reject(error) }
          resolve(result)
        })
  })
}

function updateAir (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .query(
        'UPDATE tb_air ' +
            'SET name_air = "' + req.body.name_air + '", temperature_min_air = ' + req.body.temperature_min_air + ', ' +
            'temperature_max_air = ' + req.body.temperature_max_air + ', url_device_air = "' + req.body.url_device_air + '", ' +
            'active_air = ' + req.body.active_air + ', update_air = CURRENT_TIMESTAMP() ' +
            'WHERE id_air = ' + req.body.id_air + '',
        (error, result, fields) => {
          if (error) { reject(error) }
          resolve(result)
        })
  })
}

function deleteAir (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .query(
        'UPDATE tb_air SET deleted_air = true WHERE id_air = ' + req.params.id_air + ' ',
        (error, result, fields) => {
          if (error) { reject(error) }
          resolve(result)
        })
  })
}

function currentAirData (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .query(
        'SELECT id_air, current_temperature_air, state_cool_air, state_fan_air ' +
        'FROM tb_air ' +
        'WHERE active_air = 1 AND id_air = ' + req.params.fk_id_air + '',
        (error, result, fields) => {
          if (error) { reject(error) }
          resolve(result)
        })
  })
}

module.exports = { listUnallocatedActiveAir, listAllocatedAirByIdPavilion, listAllAir, listNotActiveAir, createAir, updateAir, deleteAir, currentAirData }
