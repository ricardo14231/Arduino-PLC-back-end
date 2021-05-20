module.exports = app => {
  const scheduleController = {
    listSchedule: async (req, res) => {
      try {
        const result = await app.dataBase.querySchedule.listSchedule(req, res)

        return res.status(200).send(result)
      } catch (error) {
        return res.status(401).send('Erro no list schedule: ' + error)
      }
    },
    getIdScheduleRoom: async (req, res) => {
      try {
        const result = await app.dataBase.querySchedule.getIdScheduleRoom(req, res)

        return res.status(200).send(result)
      } catch (error) {
        return res.status(401).send('Erro no list schedule: ' + error)
      }
    },
    createSchedule: async (req, res) => {
      try {
        const result = await app.dataBase.querySchedule.createSchedule(req, res)

        return res.status(201).send(result)
      } catch (error) {
        return res.status(401).send('Erro no createSchedule: ' + error)
      }
    },
    updateAllSchedule: async (req, res) => {
      try {
        const result = await app.dataBase.querySchedule.updateAllSchedule(req, res)

        return res.status(200).send(result)
      } catch (error) {
        return res.status(401).send('Erro no updateAllSchedule: ' + error)
      }
    },
    updateSchedule: async (req, res) => {
      try {
        const result = await app.dataBase.querySchedule.updateSchedule(req, res)

        return res.status(200).send(result)
      } catch (error) {
        return res.status(401).send('Erro no updateSchedule: ' + error)
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
