module.exports = app => {
  const scheduleController = app.controllers.scheduleController

  app.get('/listSchedule/:id_room/:shift_schedule', scheduleController.listSchedule)
  app.get('/getIdScheduleRoom/:id_room/:shift_schedule', scheduleController.getIdScheduleRoom)
  app.post('/createSchedule', scheduleController.createSchedule)
  app.put('/updateAllSchedule', scheduleController.updateAllSchedule)
  app.put('/updateSchedule', scheduleController.updateSchedule)
  /*  app.get("/readRoomById/:id_room", roonController.readRoomById);
    app.get("/readRoomByIdPavilion/:id_pavilion", roonController.readRoomByIdPavilion);
    app.delete("/deleteRoom/:id_room", roonController.deleteRoom);
    */
}
