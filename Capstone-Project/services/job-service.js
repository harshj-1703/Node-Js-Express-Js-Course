class JobService{
    constructor(){
        // this.userConfig = require('../config/user-config');
        this.jobModel = require('../models/jobs')
    }

    async createJobs(jobData){
        try{
            //Save Method
            // let userObj = new this.userModel(userData)
            // let queryResponse = await userObj.save()

            //Create
            let queryResponse = await this.jobModel.create(jobData)

            return {
                status: true,
                data: queryResponse,
            }
        }
        catch(err)
        {
            console.log(err);
            return{
                status: false,
                message: 'Error in services',
            }
        }
    }

    async deleteJobs(jobId)
    {
        try{
            //findOneAndDelete -> delete single document from database , response -> deleted user data
            let deleteJob = await this.jobModel.findOneAndDelete({_id: jobId})

            //deleteMany -> It will delete multiple document

            return {
                status: true,
                data: jobId
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'Error in services while delete user',
            }
        }
    }

    async updateJobs(jobData)
    {
        try{
            //findOneAndUpdate -> return old data of user. {options -> (new:true)}, parameters 1.query(match) ,2. the data/fields to update
            let updateJobs = await this.jobModel.findOneAndUpdate({_id: jobData._id},{
                $set: {
                    title: jobData.title,
                    description: jobData.description,
                    salary: jobData.salary,
                    experience: jobData.experience,
                }
            },{new: true})

            return{
                status: true,
                data: updateJobs,
            }

            //updateOne -> update only single document. Similar to findOneAndUpdate method
            //updateMany -> it will update multiple data.
        }
        catch{
            console.log(err);
            return{
                status: false,
                message: 'Error in services while updating jobs',
            }
        }
    }

    async getAllUsers()
    {
        try{
            //find method
            let allJobs = await this.jobModel.find().lean()

            //agregate function


            return {
                status: true,
                data: allJobs,
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'Error in services while all jobs',
            }
        }
    }

    async findJob(_id)
    {
        try{
            //findOne function -> return singe document (if user exists) else it return null (if user not found)

            let job = await this.jobModel.findOne({_id: _id})
            // user["dob"] = new Date()
            //find function -> return array of object (multiple document) else it will return [] (if no data found)



            //.lean() -> Convert mongodb object document to plain javascript document

            return {
                status: true,
                data: job,
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'Error in services while finding job',
            }
        }
    }

    async searchJob(search)
    {
        try{
            //findOne function -> return singe document (if user exists) else it return null (if user not found)

            let job = await this.jobModel.find({title: search.title, salary: search.salary, experience: search.experience})

            return {
                status: true,
                data: job,
            }
        }
        catch(err){
            console.log(err);
            return{
                status: false,
                message: 'Error in services while sorting job',
            }
        }
    }

    // async sortJobSalary(sort)
    // {
    //     try{
    //         //findOne function -> return singe document (if user exists) else it return null (if user not found)

    //         let job = await this.jobModel.find({_id : sort._id}).sort({_id : -1})

    //         return {
    //             status: true,
    //             data: job,
    //         }
    //     }
    //     catch(err){
    //         console.log(err);
    //         return{
    //             status: false,
    //             message: 'Error in services while sorting job',
    //         }
    //     }
    // }
}

module.exports = new JobService();