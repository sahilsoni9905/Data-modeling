import mongoose from "mongoose"

const subTodoSchema = new mongoose.Schema({
  content : {
    required : true,
    type : String,
  },
  complete : {
    type : Boolean,
    default : false,

  },
  createdBy : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
  }
} , {timestamps : true})

export const SubTodos = mongoose.model("SubTodo " , subTodoSchema)