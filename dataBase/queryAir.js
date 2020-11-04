const dataBase = require("../config/configDB");

function listActiveAir(req, res) {
    return new Promise((resolve, reject) => {
        dataBase.connection.
        query(
        'SELECT id_air, name_air ' +
        'FROM tb_air ' +
        'WHERE active_air = 1 AND allocated_air = 0 AND deleted_Air = 0',
        (error, result, fields) => {
            if(error)
                reject(error);
            resolve(result); 
        });
    });
}



module.exports = { listActiveAir };