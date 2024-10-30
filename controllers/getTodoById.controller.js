const Todo = require('../models/todo.models')

exports.getTodoById = async(req,res) => {
     try {
          const {id} = req.params;
          const response = await Todo.findById({_id:id})

          if(!response){
               console.log(error)
               res.status(404).json({
                    success:false,
                    msg:"Not found"
               })
          }

          res.status(303).json({
               success:true,
               data:response,
               msg:`Todo ${id}`
          })
     } catch (error) {
          console.log(error)
          res.status(405).json({
               success:false,
               msg:"Not able to create entry"
          })
     }
}