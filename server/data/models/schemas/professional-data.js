const {Schema}= require('mongoose')

module.exports= new Schema({

    profession: {
        type: String,
        required: true,
        enum: ['actor/actress', 'model', 'singer', 'dancer', 'musician', 'other']
    },
    singing: {
        type: Boolean,
        required: true
    },
    dancing: {
        type: Boolean,
        required: true
    },
    otherHabilities: {
        type: String,
        
    },
    previousJobExperiences: {
        type: Number,
        required: true
    },
    curriculum: {
        type: String,
        
    }

})