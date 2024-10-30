const express = require('express')
const router = express.Router()

const {createTodo} = require('../controllers/createTodo.controller')
const {getTodos} = require('../controllers/getTodos.controller')
const {getTodoById} = require('../controllers/getTodoById.controller')
const {updateTodo} = require('../controllers/updateTodo.controller')
const { deleteTodo } = require('../controllers/deleteTodo.controller')

router.get('/getTodos', getTodos)
router.post('/createTodo',createTodo)
router.get('/getTodo/:id', getTodoById)
router.get('/updateTodo/:id', updateTodo)
router.delete('/deleteTodo/:id', deleteTodo)

module.exports = router;
