const Todo = require('../models/todo.models')

exports.updateTodo = async(req,res) => {
     try {
          const {id} = req.params;
          const {title,description} = req.body;

          const response = await Todo.findByIdAndUpdate(
               {_id:id},
               {title,description, updatedAt:Date.now()}
          )

          if(!response){
               console.log(error)
               res.status(404).json({
                    success:false,
                    msg:"Id not found"
               })
          }

          res.status(303).json({
               success:true,
               msg:`Todo ${id} Updated`
          })
     } catch (error) {
          console.log(error)
          res.status(405).json({
               success:false,
               msg:"Not able to update entry"
          })
     }
}