import mongoose from "mongoose"
const userSchema = new mongoose.Schema(
  {
    username : {
      type : String,
      required : true,
      unique : true,

    },
    email: {
      type: String,
      required : true,
      unique : true,
    },
    password: {
      type : String,
      required : [true , "password is required "],  // in an array form we can also write the msg to //display if that is not folllowed
    }
  } , {timestamps : true} // create a record of when created and updated
  );
export const User = mongoose.model("User" , userSchema)
// these 3 lines are very impotant 
