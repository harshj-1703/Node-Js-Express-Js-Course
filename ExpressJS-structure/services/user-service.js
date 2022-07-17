class UserService{
    constructor(){
        this.userConfig = require('../config/user-config');
    }

    checkUserCredentials(email, password){

        //create database query and check from daatabase

        if(email != this.userConfig.email){
            return {
                status: false,
                message: 'Email not verified!',
            }
        }
        else if(password != this.userConfig.password){
            return {
                status: false,
                message: 'Invalid Password!',
            }
        }
        else if(email === this.userConfig.email && password === this.userConfig.password){
            return {
                status: true,
                message: 'User varified'
            }
        }
        else
        {
            return {
                status: false,
                message: 'Invalid Credentials'
            }
        }
    }
}

module.exports = new UserService();