// const express = require('express')
const Todo = require('../models/todo.models')

exports.createTodo = async(req,res) => {
     try {
          const {title,description} = req.body;

          const response = await Todo.create({title,description})

          res.status(301).json({
               success:true,
               data : response,
               msg:"Entry created successfully"
          })
     } catch (error) {
          console.log(error)
          res.status(405).json({
               success:false,
               msg:"Not able to create entry"
          })
     }
}

