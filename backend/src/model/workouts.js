const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

//     -weight
//   -height
//   -waist circumference
//   -neck circumference
//   -BMI
//   -Fat percentage
//   -weekly progress
const workoutsSchema = new Schema({
    Weight: {
        type:Integer,
        required : true
    },
    Height: {
        type:Number,
        required : true
    },
    Waist_circumference: {
        type:Number,
        required : true
    },
    Neck_circumference: {
        type:Number,
        required : true
    },
    BMI: {
        type:Number,
        required : true
    },

});