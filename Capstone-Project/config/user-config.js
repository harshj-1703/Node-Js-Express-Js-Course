class UserConfig{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
}

module.exports = new UserConfig('bhai@1.com','12345678');