module.exports = app => {

    const roonController = app.controllers.roomController;
    
    app.get("/listRoom", roonController.listRoom);
    app.get("/readRoomById/:id_room", roonController.readRoomById);
    app.get("/readRoomByIdPavilion/:id_pavilion", roonController.readRoomByIdPavilion);
    app.post("/createRoom", roonController.createRoom);
    app.put("/updateRoom/:id_room", roonController.updateRoom);
    app.delete("/deleteRoom/:id_room", roonController.deleteRoom);

}