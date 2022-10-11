class JobController{
    constructor(){
        this.es6BindAll = require('es6bindall')
        // this.es6BindAll(this, ['verifyUser'])
        this.jobservice = require('../services/job-service')
        this.mongoose = require('mongoose')
    }

    async createJobs(req, res)
    {
        try{
            let jobData = {
                title: req.body.title,
                description: req.body.description,
                salary: req.body.salary,
                experience: req.body.experience,
            }
            console.log("jobData", jobData);
            let queryResponse = await this.jobservice.createJobs(jobData);
            if(queryResponse.status)
            {
                res.status(200).send({
                    status: true,
                    message: 'Job Inserted',
                })
            }
            else
            {
                res.status(400).send({
                    status: false,
                    message: 'Error in inserting job',
                })
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'Error in controller',
            }
        }
    }

    async deleteJobs(req, res)
    {
        try{
            let jobId = req.body._id
            let deleteJob = await this.jobservice.deleteJobs(jobId)
            if(deleteJob.status)
            {
                res.status(200).send({
                    status: true,
                    data: deleteJob.data,
                })
            }
            else
            {
                res.status(400).send({
                    status: false,
                    message: 'Error while deleting user',
                })
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'error in controller while deleting users',
            }
        }
    }

    async updateJobs(req, res)
    {
        try{
            let updateJobs = await this.jobservice.updateJobs(req.body)
            if(updateJobs.status)
            {
                res.status(200).send({
                    status: true,
                    data: updateJobs.data,
                })
            }
            else
            {
                res.status(400).send({
                    status: false,
                    message: 'Error while updating job',
                })
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'error in controller while patching jobs',
            }
        }
    }
}

module.exports = new JobController();