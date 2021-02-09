module.exports = app => {
  const scheduleController = app.controllers.scheduleController

  app.get('/listSchedule/:id_room/:shift_schedule', scheduleController.listSchedule)
  /*  app.get("/readRoomById/:id_room", roonController.readRoomById);
    app.get("/readRoomByIdPavilion/:id_pavilion", roonController.readRoomByIdPavilion);
    app.post("/createRoom", roonController.createRoom);
    app.put("/updateRoom/:id_room", roonController.updateRoom);
    app.delete("/deleteRoom/:id_room", roonController.deleteRoom);
    */
}
