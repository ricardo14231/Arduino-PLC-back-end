module.exports = app => {

    const airController = app.controllers.airController;
    
    app.get("/listActiveAir", airController.listActiveAir);
    
}