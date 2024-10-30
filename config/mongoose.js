const mongoose = require('mongoose')
require('dotenv').config()

const dbConnect = () => {
     mongoose.connect(process.env.DB_URL)
     .then(()=> console.log(`DB Connected`))
     .catch( (e) => {
          console.log("Error")
          process.exit(1)
     })
}

module.exports = dbConnect;