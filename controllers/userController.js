module.exports = app => {
  const userController = {

    listAllUser: async (req, res) => {
      try {
        const result = await app.dataBase.queryUser.listAllUser(req, res)

        return res.status(200).send(result)
      } catch (error) {
        return res.status(401).send('Error listAllUser: ' + error)
      }
    },
    createUser: async (req, res) => {
      try {
        const result = await app.dataBase.queryUser.createUser(req, res)

        return res.status(201).send(result)
      } catch (error) {
        return res.status(401).send('Error createUser: ' + error)
      }
    },
    updateUser: async (req, res) => {
      try {
        const result = await app.dataBase.queryUser.updateUser(req, res)

        return res.status(200).send(result)
      } catch (error) {
        return res.status(401).send('Error updateUser: ' + error)
      }
    },
    deleteUser: async (req, res) => {
      try {
        const result = await app.dataBase.queryUser.deleteUser(req, res)

        return res.status(200).send(result)
      } catch (error) {
        return res.status(401).send('Error deleteUser: ' + error)
      }
    }
  }

  return userController
}
