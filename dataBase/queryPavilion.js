const dataBase = require("../config/configDB");


function listAllPavilion(req, res) {
    
    return new Promise((resolve, reject) => {
        dataBase.connection
        .query('SELECT id_pavilion, name_pavilion, amount_room_pavilion, active_pavilion ' + 
                'FROM tb_pavilion ' + 
                ' WHERE deleted_pavilion = 0 ' , 
                (error, result, fields) => {
            if(error) 
                reject(error);
            resolve(result);
        });
    });
}

function listActivePavilion(req, res) {
    
    return new Promise((resolve, reject) => {
        dataBase.connection
        .query('SELECT id_pavilion, name_pavilion, amount_room_pavilion, active_pavilion ' + 
                'FROM tb_pavilion ' + 
                ' WHERE active_pavilion = 1 AND deleted_pavilion = 0 ' , 
                (error, result, fields) => {
            if(error) 
                reject(error);
            resolve(result);
        });
    });
}

function readPavilionById(req, res) {
    
    return new Promise((resolve, reject) => {
        dataBase.connection
        .query('SELECT id_pavilion, name_pavilion, amount_room_pavilion ' + 
                'FROM tb_pavilion ' + 
                'WHERE id_pavilion = ' + req.params.id_pavilion , 
                (error, result, fields) => {
            if(error) 
                reject(error);
            resolve(result);
        });
    });
}

function createPavilion(req, res) {
    
    return new Promise((resolve, reject) => {
        dataBase.connection
        .query('INSERT INTO tb_pavilion (name_pavilion, amount_room_pavilion, active_pavilion, deleted_pavilion, update_pavilion, create_pavilion) ' + 
                'VALUES ("'+ req.body.name_pavilion +'", '+ req.body.amount_room_pavilion +', '+ req.body.active_pavilion +', 0, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()) ', 
                (error, result, fields) => {
            if(error) 
                reject(error);
            resolve(result);
        });
    });
}

function updatePavilion(req, res) {

    return new Promise((resolve, reject) => {
        dataBase.connection
            .query('UPDATE tb_pavilion ' +
                    ' SET name_pavilion = "'+ req.body.name_pavilion + '", amount_room_pavilion = '+ req.body.amount_room_pavilion +' , active_pavilion = '+ req.body.active_pavilion +
                    ' , update_pavilion = CURRENT_TIMESTAMP() ' + 
                    ' WHERE id_pavilion = ' + req.body.id_pavilion + ' ', 
                    (error, result, fields) => {
            if(error) 
                reject(error);
            resolve(result);
        });
    });
}

function deletePavilion(req, res) {
    
    return new Promise((resolve, reject) => {
        dataBase.connection
            .query('UPDATE tb_pavilion SET deleted_pavilion = 1 WHERE id_pavilion = ' + req.params.id_pavilion + '', 
            (error, result, fields) => {
            if(error) 
                reject(error);
            resolve(result);
        });
    });
}

module.exports = { listAllPavilion, listActivePavilion, readPavilionById, createPavilion, updatePavilion, deletePavilion }