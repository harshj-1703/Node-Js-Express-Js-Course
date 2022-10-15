class IndexRoute{ 
    constructor(){ 
        this.router = require("express").Router()
        this.userController = require('../controllers/user-controller');
        this.jobController = require('../controllers/job-controller');
        this.setRoutes()
    } 
 
    setRoutes(){ 
        this.router.get('/', (req, res) => { 
            res.status(200).send({ 
                status: true, 
                message: "I got the response",
            }) 
        })
        
        this.router.post('/verify-user',this.userController.verifyUser.bind(this.userController))

        this.router.post('/create-user',this.userController.createUser.bind(this.userController))

        this.router.post('/create-job',this.jobController.createJobs.bind(this.jobController))

        this.router.patch('/update-job',this.jobController.updateJobs.bind(this.jobController))

        this.router.delete('/delete-job',this.jobController.deleteJobs.bind(this.jobController))

        this.router.get('/get-detail-job',this.jobController.findJob.bind(this.jobController))

        this.router.get('/all-jobs',this.jobController.getJobs.bind(this.jobController))

        this.router.get('/search-jobs',this.jobController.searchJobs.bind(this.jobController))

        // this.router.delete('/delete-users',this.userController.deleteUser.bind(this.userController))    //done

        // this.router.patch('/update-user',this.userController.updateUser.bind(this.userController))  //done

        //Api to insert-data in user data collection
        // this.router.post('/insert-user-note',this.userController.insertUserData.bind(this.userController))  //done

        // this.router.get('/collect-user-note/:id',this.userController.collectUserData.bind(this.userController))     //done
    } 
} 

const router = new IndexRoute();
module.exports = router.router;