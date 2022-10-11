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
}

module.exports = new JobService();