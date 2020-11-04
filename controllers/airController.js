const queryAir = require("../dataBase/queryAir");

module.exports = app => {

    const airController = {
        listActiveAir: async (req, res) => {
            try {
                const result = await app.dataBase.queryAir.listActiveAir(req, res);

                return res.status(200).send(result);
            } catch (error) {
                return res.status(401).send('Erro no listActiveAir: ' + error);
            }
        }
    }
    return airController;
 }