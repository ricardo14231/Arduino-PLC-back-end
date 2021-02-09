module.exports = app => {
  const scheduleController = {
    listSchedule: async (req, res) => {
      try {
        const result = await app.dataBase.querySchedule.listSchedule(req, res)

        return res.status(200).send(result)
      } catch (error) {
        return res.status(401).send('Erro no list schedule: ' + error)
      }
    }
    /*
        readRoomById: async (req, res) => {
            try {
                const result = await app.dataBase.queryRoom.readRoomById(req, res);

                return res.status(200).send(result);

            } catch (error) {
                return res.status(401).send("Erro no readRoomById: " + error);
            }
        },
        readRoomByIdPavilion: async (req, res) => {
            try {
                const result = await app.dataBase.queryRoom.readRoomByIdPavilion(req, res);

                return res.status(200).send(result);

            } catch (error) {
                return res.status(401).send("Erro no readRoomByIdPavilion: " + error);
            }
        },
        createRoom: async (req, res) => {
            try {
                const result = await app.dataBase.queryRoom.createRoom(req, res);

                return res.status(201).send(result);

            } catch (error) {
                return res.status(401).send("Erro no createRoom: " + error);
            }
        },
        updateRoom: async (req, res) => {
            try {
                const result = await app.dataBase.queryRoom.updateRoom(req, res);

                return res.status(200).send(result);

            } catch (error) {
                return res.status(401).send("Erro no updateRoom: " + error);
            }
        },
        deleteRoom: async (req, res) => {
            try {
                const result = await app.dataBase.queryRoom.deleteRoom(req, res);

                return res.status(200).send(result);

            } catch (error) {
                return res.status(401).send("Erro no deleteRoom: " + error);
            }
        },
        */
  }

  return scheduleController
}
