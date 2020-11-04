module.exports = app => {

    const pavilionController = app.controllers.pavilionController;

    app.get('/listAllPavilion', pavilionController.listAllPavilion);
    app.get('/listActivePavilion', pavilionController.listActivePavilion);
    app.get('/readPavilionById/:id_pavilion', pavilionController.readPavilionById);
    app.post('/createPavilion', pavilionController.createPavilion);
    app.put('/updatePavilion', pavilionController.updatePavilion);
    app.delete('/deletePavilion/:id_pavilion', pavilionController.deletePavilion);

}