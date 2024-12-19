const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    uid : {
        type : Number,
        required : [true, 'Id can\'t be empty'],
        unique : [true, 'Id must be distinct']
    },
    title : {
        type : String,
        required : [true, 'Title can\'t be empty']
    },
    difficulty : {
        type : String,
        enum : ['easy', 'medium', 'hard'],
        default : 'easy'
    },
    description : {
        type : String,
        required : [true, 'Description can\'t be empty']
    },
    testcases : [{
        input : {
            type : String,
            required : [true, 'Input can\'t be empty']
        }, 
        output : {
            type : String,
            required : [true, 'Output can\'t be empty']
        }
    }]
});

const problemModel = new mongoose.model("Problems",problemSchema);

module.exports = problemModel;