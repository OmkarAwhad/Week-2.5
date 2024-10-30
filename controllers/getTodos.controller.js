const Todo = require('../models/todo.models')

exports.getTodos = async(req,res) => {
     try {
          const response = await Todo.find({});
          res.status(303).json({
               success:true,
               data:response,
               msg:"All Todos"
          })
          
     } catch (error) {
          console.log(error)
          res.status(405).json({
               success:false,
               msg:"Not able to create entry"
          })
     }
}