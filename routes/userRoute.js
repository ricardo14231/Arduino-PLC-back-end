module.exports = app => {
  const userController = app.controllers.userController

  app.get('/listAllUser', userController.listAllUser)
  app.post('/createUser', userController.createUser)
  app.put('/updateUser', userController.updateUser)
  app.delete('/deleteUser/:id_user', userController.deleteUser)
}
