import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
  name : {
    type : String , 
    required : true ,
  },
  sallary : {
    type : String ,
    required : true  , 
  },
  qualification: {
    type : String ,
    required : true  , 

  },
  experiencedInYears : {
    type : Number,
    default : 0,
  },
  //ab dekhna h kitne hospitals m wo serve krte h
  worksInHospitals : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Hospital",
    }

  ]


} , {timestamps : true})

export const Doctor = mongoose.model("Doctor" , doctorSchema)