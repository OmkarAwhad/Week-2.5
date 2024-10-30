const Todo = require('../models/todo.models')

exports.deleteTodo = async(req,res) => {
     try {
          const {id} = req.params;

          const response = await Todo.findByIdAndUpdate({_id:id})
          if(!response){
               console.log(error)
               res.status(404).json({
                    success:false,
                    msg:"Id not found"
               })
          }

          res.status(303).json({
               success:true,
               msg:`Todo ${id} Deleted`
          })
     } catch (error) {
          console.log(error)
          res.status(405).json({
               success:false,
               msg:"Not able to delete entry"
          })
     }
}