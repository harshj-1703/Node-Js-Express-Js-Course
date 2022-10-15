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
                isadmin: req.body.isadmin,
            }
            console.log("jobData", jobData);
            if(jobData.isadmin == true)
            {
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
            else
            {
                res.status(200).send({
                    status: true,
                    message: 'User is not admin',
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
            let isadmin = req.body.isadmin
            if(isadmin == true)
            {
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
            else
            {
                res.status(200).send({
                    status: true,
                    message: "User is not admin",
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
            let isadmin = req.body.isadmin
            if(isadmin == true)
            {
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
            else
            {
                res.status(200).send({
                    status: true,
                    message: 'User is not admin',
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

    async getJobs(req, res)
    {
        try{
            let allJobs = await this.jobservice.getAllUsers()
            if(allJobs.status)
            {
                res.status(200).send({
                    status: true,
                    data: allJobs.data,
                })
            }
            else
            {
                res.status(400).send({
                    status: false,
                    message: 'Error in collecting all Jobs',
                })
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'error in controller while collecting all jobs',
            }
        }
    }

    async findJob(req, res){
        try{
            // let email = req.params.email
            let findJob = await this.jobservice.findJob(req.body._id)
            if(findJob.status)
            {
                res.status(200).send({
                    status: true,
                    data: findJob.data,
                })
            }
            else
            {
                res.status(400).send({
                    status: false,
                    message: 'Error in finding job',
                })
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'Finding in job controller error',
            }
        }
    }

    async searchJobs(req, res){
        try{
            // let email = req.params.email
            let searchJobs = await this.jobservice.searchJob(req.body)
            if(searchJobs.status)
            {
                res.status(200).send({
                    status: true,
                    data: searchJobs.data,
                })
            }
            else
            {
                res.status(400).send({
                    status: false,
                    message: 'Error in sorting job',
                })
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'Sorting in job controller error',
            }
        }
    }

    async sortJobsSalary(req, res){
        try{
            // let email = req.params.email
            let sortJob = await this.jobservice.sortJobSalary(req.body)
            if(sortJob.status)
            {
                res.status(200).send({
                    status: true,
                    data: sortJob.data,
                })
            }
            else
            {
                res.status(400).send({
                    status: false,
                    message: 'Error in sorting job',
                })
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'Sorting in job controller error',
            }
        }
    }
}

module.exports = new JobController();