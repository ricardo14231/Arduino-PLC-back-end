module.exports = app => {

    const roomController = app.controllers.roomController;
    
    app.get("/listAllRoom", roomController.listAllRoom);
    app.get("/readRoomById/:id_room", roomController.readRoomById);
    app.get("/readRoomByIdPavilion/:id_pavilion", roomController.readRoomByIdPavilion);
    app.get("/readCrudRoomByIdPavilion/:id_pavilion", roomController.readCrudRoomByIdPavilion);
    app.post("/createRoom", roomController.createRoom);
    app.put("/updateRoom", roomController.updateRoom);
    app.delete("/deleteRoom/:id_room", roomController.deleteRoom);

}