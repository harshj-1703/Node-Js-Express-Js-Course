class IndexRoute{ 
    constructor(){ 
        this.router = require("express").Router()
        this.weatherController = require('../controllers/weather-controller')
        this.userController = require('../controllers/user-controller');
        this.setRoutes()
    } 
 
    setRoutes(){ 
        this.router.get('/', (req, res) => { 
            res.status(200).send({ 
                status: true, 
                message: "I got the response",
            }) 
        })
        this.router.get('/get-weather',this.weatherController.getWeatherDetails.bind(this.weatherController))
        
        this.router.post('/verify-user',this.userController.verifyUser.bind(this.userController))
    } 
} 

const router = new IndexRoute();
module.exports = router.router;