module.exports = app => {
  const pavilionController = {

    listAllPavilion: async (req, res) => {
      try {
        const result = await app.dataBase.queryPavilion.listAllPavilion(req, res)

        return res.status(200).send(result)
      } catch (error) {
        return res.status(401).send('Error listPavilion: ' + error)
      }
    },
    listActivePavilion: async (req, res) => {
      try {
        const result = await app.dataBase.queryPavilion.listActivePavilion(req, res)

        return res.status(200).send(result)
      } catch (error) {
        return res.status(401).send('Error listPavilion: ' + error)
      }
    },
    readPavilionById: async (req, res) => {
      try {
        const result = await app.dataBase.queryPavilion.readPavilionById(req, res)

        return res.status(200).send(result)
      } catch (error) {
        return res.status(401).send('Error readPavilionById: ' + error)
      }
    },

    createPavilion: async (req, res) => {
      try {
        const result = await app.dataBase.queryPavilion.createPavilion(req, res)

        return res.status(201).send(result)
      } catch (error) {
        return res.status(401).send('Error createPavilion: ' + error)
      }
    },
    updatePavilion: async (req, res) => {
      try {
        const result = await app.dataBase.queryPavilion.updatePavilion(req, res)

        return res.status(200).send(result)
      } catch (error) {
        return res.status(401).send('Error updatePavilion: ' + error)
      }
    },
    deletePavilion: async (req, res) => {
      try {
        const result = await app.dataBase.queryPavilion.deletePavilion(req, res)

        return res.status(200).send(result)
      } catch (error) {
        return res.status(401).send('Error deletePavilion: ' + error)
      }
    }

  }

  return pavilionController
}
