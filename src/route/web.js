import express from "express";
import homeController from '../controller/homeController.js';
let router = express.Router();
// app.METHOD(PATH, HANDLER)
const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/about', (req, res) => {
        res.send(`I'm Eric!`)
    })

    return app.use('/', router)
}


export default initWebRoute;