const dataBase = require("../config/configDB");

function listRoom(req, res) {
    return new Promise((resolve, reject) => {
        dataBase.connection.query("", (error, result, fields) => {
            if(error)
                reject(error);
            resolve(result); 
        });
    });
}

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
        query('SELECT id_room, name_room, state_air, current_temperature_air, state_cool_air, state_fan_air, temperature_min_air, temperature_max_air, url_device_air ' +
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

module.exports = { listRoom, readRoomById, readRoomByIdPavilion, createRoom, updateRoom, deleteRoom };