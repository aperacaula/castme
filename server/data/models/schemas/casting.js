const {Schema, Schema:{ObjectId}}= require('mongoose')
const PhysicalData= require('./physical-data')

module.exports= new Schema({
    title:{
        type: String,
        required: true,
    },

    minAge: {
        type: Number,
        required: true
    },
    maxAge: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    description: {
        type: String,
        required: true,
    },
    physicalReq: PhysicalData,


    applicants: [{type: ObjectId, ref: 'User'}]
    
})