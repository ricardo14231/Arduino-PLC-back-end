const dataBase = require('../config/configDB')

function listSchedule (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .query(`SELECT id_schedule, fk_id_room, ${req.params.shift_schedule} AS schedule_room, name_room
             FROM tb_schedule JOIN tb_room ON tb_room.id_room = tb_schedule.fk_id_room WHERE fk_id_room = ${req.params.id_room} `,
      (error, result, fields) => {
        if (error) {
          reject(error)
        }
        resolve(result)
      })
  })
}

function getIdScheduleRoom (req, res) {
  return new Promise((resolve, reject) => {
    dataBase.connection
      .query(`SELECT id_schedule, ${req.params.shift_schedule} AS shift_schedule, active_schedule
             FROM tb_schedule WHERE fk_id_room = ${req.params.id_room} `,
      (error, result, fields) => {
        if (error) {
          reject(error)
        }
        resolve(result)
      })
  })
}

function createSchedule (req, res) {
  const shiftMorning = JSON.stringify(req.body.shift_morning)
  const shiftAfternoon = JSON.stringify(req.body.shift_afternoon)
  const shiftNight = JSON.stringify(req.body.shift_night)

  return new Promise((resolve, reject) => {
    dataBase.connection
      .query(`INSERT INTO tb_schedule (fk_id_room, shift_morning, shift_afternoon, shift_night, active_schedule, deleted_schedule, update_schedule, create_schedule)
        VALUE (${req.body.fk_id_room} , '${shiftMorning}', '${shiftAfternoon}', '${shiftNight}', 0,0, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP())`,
      (error, result, fields) => {
        if (error) {
          reject(error)
        }
        resolve(result)
      })
  })
}

function updateAllSchedule (req, res) {
  const shiftMorning = JSON.stringify(req.body.shift_morning)
  const shiftAfternoon = JSON.stringify(req.body.shift_afternoon)
  const shiftNight = JSON.stringify(req.body.shift_night)
  console.log(req.body)
  return new Promise((resolve, reject) => {
    dataBase.connection
      .query(`UPDATE tb_schedule
      SET unenabled_hour_morning = ${req.body.unenabled_hour_morning}, unenabled_hour_afternoon = ${req.body.unenabled_hour_morning}, unenabled_hour_night = ${req.body.unenabled_hour_morning}, 
      shift_morning = '${shiftMorning}', shift_afternoon = '${shiftAfternoon}', shift_night = '${shiftNight}', active_schedule, = ${req.body.active_schedule},
      update_schedule = CURRENT_TIMESTAMP() 
      WHERE id_schedule = ${req.body.id_schedule} `,
      (error, result, fields) => {
        if (error) {
          console.log(error)
          reject(error)
        }
        resolve(result)
      })
  })
}

function updateSchedule (req, res) {
  const shiftTime = JSON.stringify(req.body.shift_time)

  return new Promise((resolve, reject) => {
    dataBase.connection
      .query(`UPDATE tb_schedule
      SET ${req.body.shift} = '${shiftTime}', active_schedule = ${req.body.active_schedule}, update_schedule = CURRENT_TIMESTAMP() 
      WHERE id_schedule = ${req.body.id_schedule} `,
      (error, result, fields) => {
        if (error) {
          console.log(error)
          reject(error)
        }
        resolve(result)
      })
  })
}
/*
function readRoomById(req, res) {
    return new Promise((resolve, reject) => {
        dataBase.connection.query("", (error, result, fields) => {
            if(error)
                reject(error);
            resolve(result);
        });
    });
}

function readRoomByIdPavilion(req, res) {
    return new Promise((resolve, reject) => {
        dataBase.connection.
        query('SELECT id_room, name_room, state_air, current_temperature_air, state_cool_air, state_fan_air ' +
        'FROM tb_room join tb_air ' +
        'ON tb_room.fk_id_air = tb_air.id_air ' +
        'WHERE tb_room.fk_id_pavilion = ' + req.params.id_pavilion + '',
        (error, result, fields) => {
            if(error)
                reject(error);
            resolve(result);
        });
    });
}

function updateRoom(req, res) {
    return new Promise((resolve, reject) => {
        dataBase.connection.query("", (error, result, fields) => {
            if(error)
                reject(error);
            resolve(result);
        });
    });
}

function deleteRoom(req, res) {
    return new Promise((resolve, reject) => {
        dataBase.connection.query("", (error, result, fields) => {
            if(error)
                reject(error);
            resolve(result);
        });
    });
}
*/

module.exports = { listSchedule, getIdScheduleRoom, createSchedule, updateAllSchedule, updateSchedule }
