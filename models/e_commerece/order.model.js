import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({
  productId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Product",
  },
  quantity : {
    type : Number ,
    required : true,
  }
});


const orderSchema = new mongoose.Schema({
  orerPrice : {
    type : Number,
    required : true,
  },
  customer : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
  },
  orderItems : {
    type :  [orderItemSchema]
  },
  address : {
    type : String,
    required : true,
  },
  status : {
    type : String,
    //only the below choic
    enums : ["PENDING " , "CANCELLED " , "DELIVERED"],
    default : "PEINDING",
  }
  
} , {timestamps: true })

export const Order = mongoose.model("order")