//import mongoose from 'mongoose';
const mongoose =require("mongoose")
  const { Schema } = mongoose;

  const studentSchema = new Schema({
    Student_name:  String, 
    registration_number: Number,
    Marks_Outof50: Number
    
  });
  module.exports=mongoose.model("student",studentSchema,"SL-LAB-student")