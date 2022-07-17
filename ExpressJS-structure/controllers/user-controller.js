class UserController{
    constructor(){
        this.es6BindAll = require('es6bindall')
        this.es6BindAll(this, ['verifyUser'])
        this.userservice = require('../services/user-service')
    }

    async verifyUser(req, res){
        //Fetch the credentials from the request object
        let userEmail = req.body.email         //req.params.variable, req.query.variable
        let userPassword  = req.body.password
        //Pass that credentials inside service function
        let serviceResponse = await this.userservice.checkUserCredentials(userEmail,userPassword) 
        console.log('ServiceResponse',serviceResponse)
        //Send the proper response to the user
        let resStatus = 200
        if(serviceResponse.status != true)
        {
            resStatus = 401;
        }
        res.status(resStatus).send(serviceResponse)
    }
}

module.exports = new UserController();