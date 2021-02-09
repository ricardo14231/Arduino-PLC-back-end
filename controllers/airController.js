module.exports = app => {
  const airController = {
    listUnallocatedActiveAir: async (req, res) => {
      try {
        const result = await app.dataBase.queryAir.listUnallocatedActiveAir(req, res)

        return res.status(200).send(result)
      } catch (error) {
        return res.status(401).send('Erro no listUnallocatedActiveAir: ' + error)
      }
    },

    listAllocatedAirByIdPavilion: async (req, res) => {
      try {
        const result = await app.dataBase.queryAir.listAllocatedAirByIdPavilion(req, res)

        return res.status(200).send(result)
      } catch (error) {
        return res.status(401).send('Erro no listAllocatedAirByIdPavilion: ' + error)
      }
    },

    listAllAir: async (req, res) => {
      try {
        const result = await app.dataBase.queryAir.listAllAir(req, res)

        return res.status(200).send(result)
      } catch (error) {
        return res.status(401).send('Erro no listAllAir: ' + error)
      }
    },

    listNotActiveAir: async (req, res) => {
      try {
        const result = await app.dataBase.queryAir.listNotActiveAir(req, res)

        return res.status(200).send(result)
      } catch (error) {
        return res.status(401).send('Erro no listNotActiveAir: ' + error)
      }
    },

    createAir: async (req, res) => {
      try {
        const result = await app.dataBase.queryAir.createAir(req, res)

        return res.status(200).send(result)
      } catch (error) {
        return res.status(401).send('Erro no cretaeAir: ' + error)
      }
    },

    updateAir: async (req, res) => {
      try {
        const result = await app.dataBase.queryAir.updateAir(req, res)

        return res.status(200).send(result)
      } catch (error) {
        return res.status(401).send('Erro no updateAir: ' + error)
      }
    },

    deleteAir: async (req, res) => {
      try {
        const result = await app.dataBase.queryAir.deleteAir(req, res)

        return res.status(200).send(result)
      } catch (error) {
        return res.status(401).send('Erro no deleteAir: ' + error)
      }
    }
  }
  return airController
}
