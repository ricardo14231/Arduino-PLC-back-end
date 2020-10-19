const dataBase = require("../config/configDB");

function listSchedule(req, res) {
    return new Promise((resolve, reject) => {
        dataBase.connection.
            query('SELECT id_schedule, fk_id_room, ' + req.params.shift_schedule + ' AS schedule_room, name_room ' + 
            'FROM tb_schedule JOIN tb_room ON tb_room.id_room = tb_schedule.fk_id_room WHERE fk_id_room = "' + req.params.id_room +'"', 
            (error, result, fields) => {
            if(error)
                reject(error);
            resolve(result); 
        });
    });
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

function createRoom(req, res) {
    return new Promise((resolve, reject) => {
        dataBase.connection.query("", (error, result, fields) => {
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

module.exports = { listSchedule };