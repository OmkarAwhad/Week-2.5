const express = require('express')
const app = express()
const todoRoutes = require('./routes/todo.routes')
const dbConnect = require('./config/mongoose')

require('dotenv').config()

const PORT = process.env.PORT || 4000

// parsing
app.use(express.json())

app.use('/api/v1', todoRoutes)


app.listen(PORT,() => console.log(`Server started at port ${PORT}`))
dbConnect()