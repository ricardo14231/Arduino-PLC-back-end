module.exports = app => {

    const airController = app.controllers.airController;
    
    app.get("/listUnallocatedActiveAir", airController.listUnallocatedActiveAir);
    app.get("/listAllocatedAirByIdPavilion/:id_pavilion", airController.listAllocatedAirByIdPavilion);
    app.get("/listAllAir", airController.listAllAir);
    app.get("/listNotActiveAir", airController.listNotActiveAir);
    app.post("/createAir", airController.createAir);
    app.post("/updateAir", airController.updateAir);
    app.delete("/deleteAir/:id_air", airController.deleteAir);
}