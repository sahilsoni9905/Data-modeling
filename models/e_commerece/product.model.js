import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  description : {
    required : true ,
    type : String,
  },
  name : {
    type : String,
    required : true,
  },
  productImage : {
    type : String , // url type 
  },
  price : {
    type : Number,
    default : 0,
  },
  stock : {
    default : 0,
    type : Number,
  },
  // now we want it should be a part of some category
  category : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Category",
    required : true,
  },
  owner: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
  }
} , {timestamps : true})

export const Product = mongoose.model("Product" , productSchema)